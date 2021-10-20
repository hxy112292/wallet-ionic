import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.page.html',
  styleUrls: ['./user-center.page.scss'],
})
export class UserCenterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userInfo() {
    this.router.navigate(['user-info']);
  }

  updatePassword() {
    this.router.navigate(['update-password']);
  }

}
