import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const appRoute : Routes = [
	{ path : '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
	{ path : '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
	{ path : '**', redirectTo : '', pathMatch : 'full' }
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forRoot(appRoute, {
			enableTracing : false,
			preloadingStrategy : PreloadAllModules
		})
	],
	exports : [RouterModule]
})

export class AppRoutingModule { }
