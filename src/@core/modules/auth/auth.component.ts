import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
interface User {
  name: string;
  surname: string;
  birthdate: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private dialog: MatDialog) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  signup(name: string, surname: string, birthdate: string, email: string, password: string) {
    const newUser: User = {
      name: name,
      surname: surname,
      birthdate: birthdate,
      email: email,
      password: password
    };

    this.http.put('/users', newUser).subscribe(
      (data) => {
        console.log('User added successfully.');
        // You can perform any additional actions here after signup success
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  login() {
    const loginEmail = (document.getElementById('loginEmail') as HTMLInputElement).value;
    const loginPassword = (document.getElementById('loginPassword') as HTMLInputElement).value;
  
    this.http.get<User[]>('/users').subscribe(
      (data) => {
       
  
        const user = data.find(u => u.email === loginEmail && u.password === loginPassword);
  
        if (user) {
          console.log('Login successful.');
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Invalid credentials. Please try again.');
        }
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );
  }
  
  

  ngOnInit() {
  }
  
}
