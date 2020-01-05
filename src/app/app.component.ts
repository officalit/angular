import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Role, RoleEnum } from './models/role';
import { CurrentUser } from './models/user-current';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentUser: CurrentUser;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isCurrentUser() 
    {
      return this.currentUser;  
    }

    get isAdmin() {
      return this.currentUser && this.currentUser.roles.some(x => x.title == RoleEnum.Admin);  
    }

}
