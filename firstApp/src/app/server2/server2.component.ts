import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server has created!';
  serverName = "Test Server";
  serverCreated = false;
  servers = ['Demoserver','Demoserver 2']
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName); 
    this.serverCreationStatus = 'Server has been created Name is ' + this.serverName;
  }
  onUpdateServeName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
}
