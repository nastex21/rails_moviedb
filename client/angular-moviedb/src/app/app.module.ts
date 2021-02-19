import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import 'materialize-css';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularTokenModule } from 'angular-token';
import {environment} from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterializeModule,
    AngularTokenModule.forRoot({
      apiBase: environment.token_auth_config.apiBase
    })
  ],
  providers: [ AngularTokenModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
