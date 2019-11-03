import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;

  issuer = 'https://dev-731325.okta.com/oauth2/default';
  redirectUri = 'https://database-editor/herokuapp.com/logged_out';


  constructor(public oktaAuth: OktaAuthService) {
    this.isAuthenticated = false;
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
   }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }


  async login() {
    await this.oktaAuth.loginRedirect();
  }

  async logout() {
    await this.oktaAuth.logout('/');  
    this.isAuthenticated = false;
  }

}
