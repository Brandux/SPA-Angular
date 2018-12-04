import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './components/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersFormComponent, UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
