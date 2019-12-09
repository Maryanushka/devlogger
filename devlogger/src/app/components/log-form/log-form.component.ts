import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';


@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
	id: string;
	text: string;
	date: any;

	isNew: boolean = true;

	constructor(private logServise: LogService) { }

  ngOnInit() {
		// subscribe to selected log observable
		this.logServise.selectedLog.subscribe(log => {
			if(log.id != null){
				this.isNew = false;
				this.id = log.id;
				this.text = log.text;
				this.date = log.date;
			}
		})

	
	}
	
	onSubmit() {
		console.log(this);

		// check if new log 
		if(this.isNew){

			// create a new log 
			let newLog = {
				id: this.generateId(),
				text: this.text,
				date: new Date()
			}
			// add log 
			this.logServise.addLog(newLog);
		}
		else {
			// create a log to be updated
			let updLog = {
				id: this.id,
				text: this.text,
				date: new Date()

			}
			// update log 
			this.logServise.updateLog(updLog);
		}

		this.clearState();
	}

	//  claer state

	clearState() {
		this.isNew = false;
		this.id = '';
		this.text = '';
		this.date = '';

		this.logServise.clearState();
	}

	generateId (){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

}
