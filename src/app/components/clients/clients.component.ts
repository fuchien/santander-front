import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

// MODELS
import { clients } from './../../shared/models/clients/clients';

// SERVICES
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: Observable<clients>

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
  }

  passingData(event: string) {
    this.clients = this.clientsService.postData(event)
  }

}
