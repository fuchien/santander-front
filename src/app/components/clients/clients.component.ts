import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

// MODELS
import { clients } from './../../shared/models/clients/clients';

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

  passingData(name: string) {
    this.loading = true
    this.clientsService.getData(name)
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
