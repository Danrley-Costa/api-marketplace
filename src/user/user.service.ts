import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcrypt';


@Injectable()
export class UserService {
  private readonly users: CreateUserDto[] = [];
  create(newUser: CreateUserDto) {
    newUser.id = uuid()
    newUser.password = hashSync(newUser.password, 10)
    this.users.push(newUser)
    return this.users;
  }

  findByUserName(userName: string){
    return this.users.find(user => user.username === userName)
  }
}
