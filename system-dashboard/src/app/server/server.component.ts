import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Server} from '../shared/model/server.model';
import {ServerMessage} from '../shared/model/server-message';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  @Output() serverAction = new EventEmitter<ServerMessage>();
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

  sendServerAction(isOnline: boolean) {
    const payload = this.buildPayload();
    this.serverAction.emit(payload);
  }

  buildPayload(): ServerMessage {
    
  }
  // toggleStatus(status: boolean): any {
  //   this.getServerAction(!status);
  // }

}
