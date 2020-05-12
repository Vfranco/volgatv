import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component';

const loginRoute: Routes = [
	{ path: '', component: LoginComponent }
]

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(loginRoute)
	]
})
export class AuthModule { }
