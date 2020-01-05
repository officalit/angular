import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CurrentUser } from 'src/app/models/user-current';
import { RoleEnum } from 'src/app/models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  currentUser: CurrentUser;
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() { this.authenticationService.logout(); this.router.navigate(['/authenticate']);}

  get isAdmin() {
    return this.currentUser && this.currentUser.roles.some(x => x.title == RoleEnum.Admin);  
  }


}
