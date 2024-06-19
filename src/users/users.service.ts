import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      {
        name: 'User1',
        email: 'user1@gmail.com',
        password: '123456',
      },
      {
        name: 'User2',
        email: 'user2@gmail.com',
        password: '123456',
      },
    ];
  }
}
