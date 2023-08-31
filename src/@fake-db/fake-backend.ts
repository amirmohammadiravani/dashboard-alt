// fake-backend.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {
  private users: User[] = [];

  constructor() {
    this.users.push({
      name: 'John',
      surname: 'Doe',
      birthdate: '1990-01-01',
      email: 'john@example.com',
      password: 'password',
      role: 'user',
      profilePicture: 'assets/johndoe.jpeg' 
    });
    this.users.push({
      name: 'John',
      surname: 'Doe',
      birthdate: '1990-01-01',
      email: 'john@example.com',
      password: 'password',
      role: 'user',
      profilePicture: '' 
    });
    this.users.push({
        name: 'Amir',
        surname: 'Iravani',
        birthdate: '1998-01-16',
        email: 'amir.mohammad@meyler.it',
        password: 'password',
        role: 'admin',
        profilePicture: 'assets/amir.jpg' 
      });
      this.users.push({
        name: 'Amir',
        surname: 'Iravani',
        birthdate: '1998-01-16',
        email: 'amir.mohammad@meyler.it',
        password: 'password',
        role: 'admin',
        profilePicture: '' 
      });
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}

interface User {
  name: string;
  surname: string;
  birthdate: string;
  email: string;
  password: string;
  role: string;
  profilePicture: string;
}
