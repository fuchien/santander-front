import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

// SERVICES
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clientsData

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
  }

  passingData(event: string) {
    this.clientsService.postData(event)
  }

}
