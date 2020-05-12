import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) { }

	login(user:string, pass:string) : Promise<any>{
		return this.http.post(`${environment.API_URL}api/authTv`, { username : user, password : pass, dateMobile : new Date() }).toPromise();
	}

	aforo(token:string) : Promise<any>{
		return this.http.post(`${environment.API_URL}api/getAforo`, { dateMobile : new Date(), tokeSignIn : token }).toPromise();
	}
}
