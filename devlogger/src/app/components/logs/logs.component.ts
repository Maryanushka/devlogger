import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
	logs: Log[];
	selectedLog: Log;
	loaded: boolean = false;

  constructor(private logServise: LogService) { }

  ngOnInit() {
		this.logServise.stateClear.subscribe( clear => {
			if(clear){
				this.selectedLog = {id: '', text: '', date: ''}
			}
		})

		this.logServise.getLog().subscribe( logs => { 
			this.logs = logs;
			this.loaded = true;
		});
	}
	onSelect(log: Log){
		this.logServise.setFormLog(log);

		this.selectedLog = log;
	}
	onDelete(log: Log){
		console.log(log)
		if(confirm("Are you sure ?")){
			this.logServise.deleteLog(log);
		}
	}

}
