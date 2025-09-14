import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { IUserRepository } from './interfaces/user-repository.interface';
import { User } from '../entities/user.entity';
import { SignUpDto } from '../dtos/sign-up.dto';

@Injectable()
export class MysqlUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private _userRepositorory: Repository<User>,
  ) {}

  findByEmail(email: string): Promise<User | null> {
    return this._userRepositorory.findOne({ where: { email } });
  }

  async save(user: SignUpDto): Promise<User> {
    const newUser = this._userRepositorory.create(user);
    return this._userRepositorory.save(newUser);
  }
}
