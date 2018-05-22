import { HttpErrorResponse } from '@angular/common/http'
import { ErrorHandler, Injectable, NgZone, Injector } from '@angular/core';

// SERVICES
import { SnackBarService } from './shared/snack-bar/snack-bar.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(
        private injector: Injector,
        private zn: NgZone
    ) {
        super()
    }

    handleError(error: HttpErrorResponse | any): void {
        this.zn.run(() => {
            const message = error.msg;
            switch (error.status) {
                case 401:
                this.injector.get(SnackBarService).openSnackBar(message || 'Erro de autenticação!', 'Fechar');
                break;
                case 403:
                this.injector.get(SnackBarService).openSnackBar(message || 'Não autorizado!', 'Fechar');
                break;
                case 404:
                this.injector.get(SnackBarService).openSnackBar(message || 'Recurso não existe!', 'Fechar');
                break;
                case 500:
                this.injector.get(SnackBarService).openSnackBar(message || 'Recurso indisponível!', 'Fechar');
                break;
                default:
                this.injector.get(SnackBarService).openSnackBar(message || 'Ocorreu erro ao pegar os dados!', 'Fechar');
            }
            super.handleError(error)
        })
    }
}