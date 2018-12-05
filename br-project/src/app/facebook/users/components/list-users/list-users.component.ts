import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'vit-list-users',
  templateUrl: './list-users.component.html',
  styles: []
})
export class ListUsersComponent implements OnInit {

  public users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  private loadUser(){
    this.userService.getAllUser().subscribe( users => {
      this.users = users;
    });
  }

}
