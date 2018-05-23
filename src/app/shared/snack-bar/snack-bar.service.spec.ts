import { TestBed, inject } from '@angular/core/testing';

import { SnackBarService } from './snack-bar.service';

fdescribe('SnackBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarService]
    });
  });

  it('should be created', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
