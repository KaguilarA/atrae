import {
  BrowserModule
} from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  NgModule
} from '@angular/core';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  LoginComponent
} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { SchoolsRouteComponent } from './home/schools-route/schools-route.component';
import { PaylistComponent } from './home/paylist/paylist.component';
import { ReportsComponent } from './home/reports/reports.component';
import { RegisterContractComponent } from './home/contract/register-contract/register-contract.component';
import { ContractComponent } from './home/contract/contract.component';
import { ViewComponent } from './home/contract/view/view.component';
import { UserService } from './services/users/user.service';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HomeComponent,
    MainComponent,
    SchoolsRouteComponent,
    PaylistComponent,
    ReportsComponent,
    RegisterContractComponent,
    ContractComponent,
    ViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FontAwesomeModule,
    LayoutModule
  ],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
