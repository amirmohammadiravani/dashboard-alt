import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from '../../../app/pages/dashboard/dashboard.component';

import { DragdropComponent } from '../../../app/pages/dragdrop/dragdrop.component';
import { AddressComponent } from '../../../app/pages/address/address.component';
import { ComponentsComponent } from '../../../app/pages/components/components.component';
import { ProductManagementComponent } from '../../../app/pages/product-management/product-management.component';
import { AnalyticsComponent } from '../../../app/pages/analytics/analytics.component';
import { SettingsComponent } from '../../../app/pages/settings/settings.component';
import { LogsActivityComponent } from '../../../app/pages/logs-activity/logs-activity.component';
import { HelpSupportComponent } from '../../../app/pages/help-support/help-support.component';
import { ThemeEditorComponent } from '../../../app/pages/theme-editor/theme-editor.component';
import { CalendarComponent } from '../../../app/pages/calendar/calendar.component';
import { InvoicesComponent } from 'src/app/pages/invoices/invoices.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent      },

      {
        path: 'drag',
        component: DragdropComponent      },
      {
        path: 'address',
        component: AddressComponent      },
      
      {
        path: 'components',
        component: ComponentsComponent      },
        {
          path: 'invoices',
          component: InvoicesComponent      },
        {
          path: 'users',
          component: UserManagementComponent      },
        {
          path: 'products',
          component: ProductManagementComponent      },
        {
        path: '',
        component: DashboardComponent      }, 
      {
        path:'analytics',
        component: AnalyticsComponent      },
      {
        path: 'settings',
        component: SettingsComponent      },
      {
        path: 'logs',
        component: LogsActivityComponent      },
      {
        path: 'support',
        component: HelpSupportComponent      },
      {
        path: 'theme',
        component: ThemeEditorComponent      },
      {
        path: 'calendar',
        component: CalendarComponent      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }