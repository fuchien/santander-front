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

  public clients: clients[]
  public loading: boolean = false

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
  }

  passingData(name: string) {
    this.loading = true
    this.clientsService.postData(name).subscribe(
      (clients: clients[]) => {
        this.loading = false
        this.clients = clients
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
