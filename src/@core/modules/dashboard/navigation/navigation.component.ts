import { Component, OnInit , ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/@core/services/api.service';

import { HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

export interface NavLink {
  icon: string;
  path: string;
  label: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.Handset,
    Breakpoints.HandsetPortrait
  ]).pipe(map((result) => result.matches));
  @ViewChild('drawer') drawer!: MatSidenav;

  navLinks!: NavLink[];
  profilePicture: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadNavLinks();
  }
  

  loadNavLinks() {
    // Fetch navigation items from the fake backend using ApiService
    this.apiService.get<NavLink[]>('/getNavigationItems').subscribe(
      (data: NavLink[]) => {
        this.navLinks = data;
      },
      (error: any) => {
        console.error('Error loading navigation items:', error);
      }
    );
  }

  toggleDrawer() {
    if (this.isHandset$) {
      this.drawer.toggle();
    }
  }
  
  notifications: NotificationItem[] = [
    {
      icon: 'notifications_active',
      message: 'You have a new notification!',
    },
    {
      icon: 'star_rate',
      message: 'You received a 5-star rating!',
    },
    {
      icon: 'shopping_cart',
      message: 'John Doe shipment arrived!',
    },
  ];
}

interface NotificationItem {
  icon: string;
  message: string;
}
