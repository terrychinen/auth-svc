import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from '@auth/entities/user.entity';
import { SignUpDto } from '@auth/dtos/sign-up.dto';

import { IUserRepository } from './interfaces/user-repository.interface';

@Injectable()
export class MysqlUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private _userRepositorory: Repository<User>,
  ) {}

  findByEmail(email: string): Promise<User | null> {
    return this._userRepositorory.findOne({ where: { email } });
  }

  save(user: SignUpDto): Promise<User> {
    const newUser = this._userRepositorory.create(user);
    return this._userRepositorory.save(newUser);
  }
}
