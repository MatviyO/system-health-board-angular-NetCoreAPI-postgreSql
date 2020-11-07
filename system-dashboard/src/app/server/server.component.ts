import {Component, Input, OnInit} from '@angular/core';
import {Server} from '../shared/model/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  color: string;
  buttonText: string;

  constructor() { }

  ngOnInit(): void {
    this.getServerAction(this.server.isOnline);
  }
  getServerAction(isOnline: boolean): any {
    if (isOnline) {
      this.server.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else {
      this.server.isOnline = false;
      this.color = '#FFBB6B';
      this.buttonText = 'Start';
    }
  }
  toggleStatus(status: boolean): any {
    this.getServerAction(!status);
  }

}
