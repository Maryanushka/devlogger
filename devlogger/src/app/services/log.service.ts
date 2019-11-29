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

  constructor() {
			this.logs = [
				{
					id: '1',
					text: 'Log 1',
					date: new Date()
				},
				{
					id: '2',
					text: 'Log 2',
					date: new Date()
				},
				{
					id: '3',
					text: 'Log 3',
					date: new Date()
				},
			]
		}

		getLog(): Observable<Log[]> {
			return of(this.logs);
		}

		setFormLog(log: Log){
			this.logSource.next(log);
		}
	 
}
