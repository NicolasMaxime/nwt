import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { DialogLoginComponent } from './shared/dialog/dialog-login/dialog-login.component';
import { FormLoginComponent } from './shared/form/form-login/form-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogSignInComponent } from './shared/dialog/dialog-sign-in/dialog-sign-in.component';
import { FormSignInComponent } from './shared/form/form-sign-in/form-sign-in.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './login/connexion/connexion.component';
import { InscriptionComponent } from './login/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogLoginComponent,
    FormLoginComponent,
    DialogSignInComponent,
    FormSignInComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
