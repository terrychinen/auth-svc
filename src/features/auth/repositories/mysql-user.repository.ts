import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interfaces/user-repository.interface';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MysqlUserRepository implements IUserRepository {
  constructor() {}

  findByEmail(email: string) {
    throw new Error('Method not implemented.');
  }

  save(user: any) {
    throw new Error('Method not implemented.');
  }
}
