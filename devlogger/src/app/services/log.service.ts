import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
	logs: Log[]

  constructor() {
			this.logs = [
				{
					id: '1',
					text: 'Some text',
					date: new Date()
				},
				{
					id: '2',
					text: 'Some text',
					date: new Date()
				},
				{
					id: '2',
					text: 'Some text',
					date: new Date()
				},
			]
		}

		getLog(){
			return this.logs;
		}
	 
}
