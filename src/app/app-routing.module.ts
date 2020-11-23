import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConnexionComponent} from './login/connexion/connexion.component';
import {InscriptionComponent} from './login/inscription/inscription.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {RoleGuardService} from './shared/guards/role-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent },
  {path: 'inscription', component: InscriptionComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
