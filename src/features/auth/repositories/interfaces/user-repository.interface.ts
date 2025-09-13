export interface IUserRepository {
  findByEmail(email: string);
  save(user: any);
}
