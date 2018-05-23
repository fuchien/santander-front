import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { TestBed, inject } from '@angular/core/testing';

import { SnackBarService } from './snack-bar.service';

describe('SnackBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        SnackBarService
      ]
    });
  });

  it('should be created', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));

  it('validate function openSnackBar', inject([SnackBarService], (service: SnackBarService) => {
    expect(service.openSnackBar(`Failed`, `Close`)).toBeUndefined
  }));
});
