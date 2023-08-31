import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/@core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users!: User[];


  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver,
    private apiService: ApiService
  ) {}
    


  getUsers() {
    this.apiService.get<User[]>('/users').subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error loading navigation items:', error);
      }
    );
  }

  // ... rest of the UserService code ...
}
interface User {
  id: string;
  name: string;
  surname: string;
  birthdate: string; // Consider using Date type if you need to work with dates
  email: string;
  password: string;
  role: 'User' | 'Admin'; // Assuming the role can be either 'User' or 'Admin'
}
