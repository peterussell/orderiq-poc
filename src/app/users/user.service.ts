import { User } from './user.model';

export class UserService {
  nextUserId: number = 1;

  private users = [
    new User(this.getNextUserId(), 'pr', 'password', 'Pete Russell'),
    new User(this.getNextUserId(), 'mh', 'password', 'Matt Hall'),
    new User(this.getNextUserId(), 'sf', 'password', 'Sally Fox'),
    new User(this.getNextUserId(), 'dv', 'password', 'Darth Vadar', false)
  ];

  getNextUserId() {
    return this.nextUserId++;
  }

  getUserByUserName(username: string) {
    return this.users.find(u => u.username === username);
  }
}
