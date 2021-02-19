import { Component } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'lets-react-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-moviedb';
    constructor(private authToken: AngularTokenService){

      this.authToken.signIn({login: 'user@example.com', password: 'monkey67'}).subscribe(
          res => {
            console.log('auth response:', res);
            console.log('auth response headers: ', res.headers.toJSON()); // log the response header to show the auth token
            console.log('auth response body:', res.json()); // log the response body to show the user 
          },
          err => {
            console.error('auth error:', err);
          }
      );
    }
}
