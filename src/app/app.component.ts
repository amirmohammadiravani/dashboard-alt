import { Component } from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import { HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  

}
