import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AforoComponent } from './aforo/aforo.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const dashbardRoute : Routes = [
	{ path : 'dashboard/aforo', component : AforoComponent }
]

@NgModule({
	declarations: [AforoComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(dashbardRoute)
	]
})
export class DashboardModule { }
