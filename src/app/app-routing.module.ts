import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccodComponent } from './accod/accod.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "accod", component: AccodComponent, canActivate: [OktaAuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
