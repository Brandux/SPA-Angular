import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: 'new-users',
    component: FormUsersComponent,
  },
  {
    path: '',
    component : UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
