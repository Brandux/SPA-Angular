import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './shared/users.service';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  declarations: [FormUsersComponent, ListUsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers:[
    UsersService
  ],
})
export class UsersModule { }
