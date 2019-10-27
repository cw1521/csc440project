import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module'

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccodComponent } from './accod/accod.component';
import { CoreModule } from './core/core.module'
import { HttpClientModule} from '@angular/common/http';

import { OktaAuthModule } from '@okta/okta-angular';


@NgModule({
  declarations: [  
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccodComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-731325.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4000/implicit/callback',
      clientId: '0oa1odxb5obhuH9gl357'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
