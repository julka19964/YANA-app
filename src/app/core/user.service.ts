import { Injectable } from '@angular/core';
import { User } from '../registrate/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

createUser(user: User) {
  console.log(user);
}

}
