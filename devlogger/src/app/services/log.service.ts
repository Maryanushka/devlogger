import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogService {
	logs: Log[]

	private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
	selectedLog = this.logSource.asObservable();
	private stateSource = new BehaviorSubject<Boolean>(true);
	stateClear = this.logSource.asObservable();;
	

  constructor() {
		this.logs = [];
	}

	getLog(): Observable<Log[]> {
		

		if(localStorage.getItem("logs") === null){
			this.logs = []
		}
		else {
			this.logs = JSON.parse(localStorage.getItem("logs"));
		}
		return of(this.logs.sort( (a, b) => {
			return b.date = a.date;
		}));
	}

	setFormLog(log: Log){
		this.logSource.next(log);
	}

	addLog(log: Log){
		this.logs.unshift(log);

		//  add to localstorage 
		localStorage.setItem('logs', JSON.stringify(this.logs))
	}
	updateLog(log: Log){
		this.logs.forEach((current, index) => {
			if(log.id == current.id){
				// this.logs.splice( index, 1);
				let updated = this.logs.splice(index, 1);
				let infoAbout = this.logs;
				console.log(infoAbout);
				
			}
		});

		this.logs.unshift(log)

		// update loscalStorage
		localStorage.setItem('logs', JSON.stringify(this.logs))
	}
	deleteLog(log: Log) {
		this.logs.forEach((current, index) => {
			if (log.id == current.id) {
				// this.logs.splice( index, 1);
				let updated = this.logs.splice(index, 1);
				let infoAbout = this.logs;
				console.log(infoAbout);

			}
			// delete from localStorage
			localStorage.setItem('logs', JSON.stringify(this.logs))
		});
	}

	clearState(){
		this.stateSource.next(true);
	}
	 
}
