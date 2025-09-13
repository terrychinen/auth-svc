import { ConflictException, Inject, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { IUserRepository } from './repositories/interfaces/user-repository.interface';
import { SignUpDto } from './dtos/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  signIn() {}

  async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;

    const isUserExists = this.userRepository.findByEmail(email);

    if (isUserExists) {
      throw new ConflictException(`The email already exists`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Math.random(),
      email,
      password: hashedPassword,
    };

    const savedUser = this.userRepository.save(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = savedUser;
    return userWithoutPassword;
  }
}
