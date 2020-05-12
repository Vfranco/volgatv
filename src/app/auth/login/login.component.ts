import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	showMessage: boolean = false;
	buttonLogin: string = 'Ingresar';
	user: string;
	pass: string;

	constructor(private auth: LoginService, private route: Router) { }

	ngOnInit() {

	}

	startLogin(formLogin:NgForm){
		this.buttonLogin = 'Entrando ...';

		const crypt = new Md5();
		const cryptPass = crypt.appendStr(formLogin.value.pass).end().toString();

		this.auth.login(formLogin.value.user, cryptPass).then(response => {			
			if(response['status'])			
				this.route.navigate(['dashboard/aforo']);
			else
				this.showMessage = true;

			this.buttonLogin = 'Ingresar';
			
			window.localStorage.setItem('token', JSON.stringify({token : response['tokeSignIn']}));
			window.localStorage.setItem('version', JSON.stringify({ version : response.versionCode }));
		});
	}
}
