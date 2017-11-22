import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { UserComponent } from '../components/user/user.component';
import { InMemoryDataService } from '../services/in-memory-data.service';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    {provide: 'MyUserService', useClass: environment.userServiceType},
    {provide: 'API_URL',  useValue: 'api/users'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
