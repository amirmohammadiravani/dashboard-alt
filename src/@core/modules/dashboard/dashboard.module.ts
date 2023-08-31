import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from '../../../app/pages/dashboard/dashboard.component';

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
import {MatTooltipModule} from '@angular/material/tooltip';import { LayoutModule } from '@angular/cdk/layout';
import { DragdropComponent } from '../../../app/pages/dragdrop/dragdrop.component';
import { AddressComponent } from '../../../app/pages/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../../../app/pages/home/home.component';
import { EventComponent } from '../../../app/pages/event/event.component';
import { ProfileComponent } from '../../../app/pages/profile/profile.component';
import { TableComponent } from '../../../app/pages/table/table.component';
import { AnalyticsComponent } from '../../../app/pages/analytics/analytics.component';
import { LogsActivityComponent } from '../../../app/pages/logs-activity/logs-activity.component';
import { HelpSupportComponent } from '../../../app/pages/help-support/help-support.component';
import { ThemeEditorComponent } from '../../../app/pages/theme-editor/theme-editor.component';
import { CalendarComponent } from '../../../app/pages/calendar/calendar.component';
@NgModule({
  declarations: [ 
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }