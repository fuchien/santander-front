import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

// MODELS
import { clients } from './../../shared/models/clients/clients';
import { event } from './../../shared/models/event/event';

// SERVICES
import { ClientsService } from './clients.service';
import { SnackBarService } from '../../shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: clients[]
  public loading: boolean = false

  constructor(
    private clientsService: ClientsService,
    private snackBar: SnackBarService
  ) { }

  ngOnInit() {
  }

  passingData(event: event) {
    this.loading = true
    this.clientsService.getData(event.value)
      .subscribe(
        (clients: clients[]) => {
          this.loading = false
          this.clients = clients
        },
        (err: any) => {
          this.loading = false
          this.snackBar.openSnackBar(`Error to get data!`, 'Close')
        }
      )
  }

}
