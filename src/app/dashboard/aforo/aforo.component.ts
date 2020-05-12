import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'app-aforo',
	templateUrl: './aforo.component.html',
	styleUrls: ['./aforo.component.css']
})
export class AforoComponent implements OnInit {

	capacityAvailable:number = 0;
	ocupationDay:number = 0;
	percentOccupationDay:number = 0;

	constructor(private aforo: LoginService) { }

	ngOnInit() {
		let token = JSON.parse(window.localStorage.getItem('token'));
		this.getDataAforo(token);
		this.requestTime(token);
	}

	getDataAforo(token){
		this.aforo.aforo(token.token).then(response => {
			if(response.status)
			{				
				let aforoData = response.arrayHistory;

				this.capacityAvailable = aforoData.capacityAvailable;
				this.ocupationDay = aforoData.occupationDay;
				this.percentOccupationDay = aforoData.percentOccupationDay;

				this.reloadSite(response.versionCode);

				window.localStorage.setItem('version', JSON.stringify({ version : response.versionCode }));
			}
		})
	}

	requestTime(token){
		setInterval(() => {
			this.getDataAforo(token);
		}, 10000)
	}

	reloadSite(version){
		let ver = JSON.parse(window.localStorage.getItem('version'));

		if(ver.version != version)
			location.reload();
	}
}
