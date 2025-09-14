import { ConflictException, Inject, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { IUserRepository } from './repositories/interfaces/user-repository.interface';
import { SignUpDto } from './dtos/sign-up.dto';
import { Constants } from 'src/configs/enums/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Constants.USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  signIn() {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;

    const isUserExists = await this.userRepository.findByEmail(email);

    if (isUserExists) {
      throw new ConflictException(`The email is already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Math.random(),
      email,
      password: hashedPassword,
    };

    return this.userRepository.save(newUser);
  }
}
