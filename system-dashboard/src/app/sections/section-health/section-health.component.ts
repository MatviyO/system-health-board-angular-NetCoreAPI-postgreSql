import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/model/server.model';


const ServerData = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 2, name: 'dev-mail', isOnline: false},
  {id: 3, name: 'prod-web', isOnline: true}
];
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  servers: Server[] = ServerData;

  constructor() { }

  ngOnInit(): void {
  }

}
