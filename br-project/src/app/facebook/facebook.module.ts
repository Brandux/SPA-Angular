import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [
        CommonModule,
        FacebookRoutingModule
    ],
    declarations: [
        FacebookComponent,
        UsersComponent,
    ]
})
export class FacebookModule { }