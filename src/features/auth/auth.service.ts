import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { IUserRepository } from './repositories/interfaces/user-repository.interface';
import { SignUpDto } from './dtos/sign-up.dto';
import { Constants } from 'src/configs/enums/constants';
import { SignInDto } from './dtos/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Constants.USER_REPOSITORY)
    private readonly _userRepository: IUserRepository,
    private readonly _jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this._userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credentials are incorrect');
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password!);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Credentials are incorrect');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = this._jwtService.sign(payload);

    return { accessToken };
  }

  async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;

    const isUserExists = await this._userRepository.findByEmail(email);

    if (isUserExists) {
      throw new ConflictException(`The email is already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Math.random(),
      email,
      password: hashedPassword,
    };

    return this._userRepository.save(newUser);
  }
}
