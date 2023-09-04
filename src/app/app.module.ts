import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../@core/modules/material.module';
import { ComponentsComponent } from './pages/components/components.component';
import { NgChartsModule } from 'ng2-charts'; 
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogsActivityComponent } from './pages/logs-activity/logs-activity.component';
import { HelpSupportComponent } from './pages/help-support/help-support.component';
import { ThemeEditorComponent } from './pages/theme-editor/theme-editor.component';
import { AuthComponent } from '../@core/modules/auth/auth.component';
import { NavigationComponent } from '../@core/modules/dashboard/navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DragdropComponent } from './pages/dragdrop/dragdrop.component';
import { AddressComponent } from './pages/address/address.component';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/event.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TableComponent } from './pages/table/table.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from '../@core/modules/dashboard/dashboard-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FakeBackendInterceptor } from '../@core/services/fake-backend.interceptor';
import { FakeBackendService } from '../@fake-db/fake-backend';
@NgModule({
  declarations: [
    AppComponent,
   
    ComponentsComponent,
    
    AnalyticsComponent,
    SettingsComponent,
    LogsActivityComponent,
    HelpSupportComponent,
    ThemeEditorComponent,
    AuthComponent,
    NavigationComponent,
    DashboardComponent, 
    DragdropComponent, 
    AddressComponent, 
    HomeComponent, EventComponent, 
    ProfileComponent, 
    TableComponent, 
    ProductManagementComponent,
    CalendarComponent,
   
    ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTabsModule,
    MatAutocompleteModule,
    DragDropModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MaterialModule,
    NgxMasonryModule,
    NgChartsModule,
    DashboardRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    FakeBackendService,
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
