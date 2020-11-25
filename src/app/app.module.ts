import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogLoginComponent } from './shared/dialog/dialog-login/dialog-login.component';
import { FormLoginComponent } from './shared/form/form-login/form-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogSignInComponent } from './shared/dialog/dialog-sign-in/dialog-sign-in.component';
import { FormSignInComponent } from './shared/form/form-sign-in/form-sign-in.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './login/connexion/connexion.component';
import { InscriptionComponent } from './login/inscription/inscription.component';
import {JwtInterceptor} from './shared/interceptor/jwt.interceptor';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { UserComponent } from './user/user.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NavigationComponent } from './navigation/navigation.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputerCardComponent } from './shared/card/computer-card/computer-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './admin/admin.component';
import {RoleGuardService} from './shared/guards/role-guard.service';
import { ConfigurationProfileComponent } from './configuration-profile/configuration-profile.component';
import { DialogConfirmComponent } from './shared/dialog/dialog-confirm/dialog-confirm.component';
import { SocketIoModule} from 'ngx-socket-io';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {ChatComponent} from './chat/chat.component';
import { DialogChatComponent } from './shared/dialog/dialog-chat/dialog-chat/dialog-chat.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DialogLoginComponent,
    FormLoginComponent,
    DialogSignInComponent,
    FormSignInComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    HeadBarComponent,
    UserComponent,
    NavigationComponent,
    ComputerComponent,
    ComputerCardComponent,
    AdminComponent,
    ConfigurationProfileComponent,
    DialogConfirmComponent,
    ChatComponent,
    DialogChatComponent,
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
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    SocketIoModule.forRoot(environment.backend.SocketIOConfig),
    MatTableModule,
    MatListModule,
  ],
  providers: [    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    RoleGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
