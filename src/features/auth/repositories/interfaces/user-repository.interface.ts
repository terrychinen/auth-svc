import { User } from '../../entities/user.entity';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  save(user: any): Promise<User>;
}
