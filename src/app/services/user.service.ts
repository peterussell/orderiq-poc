import { User, UserPrivilege } from '../models/user.model';

export class UserService {
  nextUserId: number = 1;

  private users: User[] = [
    new User('pr', '1', 'Pete Russell'),
    new User('mh', '1', 'Matt Hall'),
    new User('sf', '1', 'Sally Fox'),
    new User('dv', '1', 'Darth Vadar', false)
  ];

  constructor() {
    // TEMP: give admin privileges to a user for testing
    this.users[0].privileges.push(UserPrivilege.Admin);
  }

  getUserByUserName(username: string) {
    return this.users.find(u => u.username === username);
  }

  getUserById(id: number) {
    return this.users.find(u => u.id === id);
  }
}
