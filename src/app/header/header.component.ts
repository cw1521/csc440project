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
  redirectUri = `${window.location.origin}/logged_out`;


  constructor(public oktaAuth: OktaAuthService) {
    this.isAuthenticated = false;
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
   }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }


  login() {
    this.oktaAuth.loginRedirect();
  }

  async logout() {
      // Read idToken before local session is cleared
      const idToken = await this.oktaAuth.getIdToken();

      // Clear local session
      await this.oktaAuth.logout('/');
  
      // Clear remote session
      window.location.href = `${this.issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${this.redirectUri}`;
      
  }

}
