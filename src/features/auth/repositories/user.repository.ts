import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interfaces/user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  private users = [];

  findByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  save(user: any) {
    this.users.push(user);
    return user;
  }
}
