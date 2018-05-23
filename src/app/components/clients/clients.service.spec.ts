import { TestBed, inject } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([ClientsService], (service: ClientsService) => {
    expect(service).toBeTruthy();
  }));

  it('validate function getData', inject([ClientsService], (service: ClientsService) => {
    expect(service.getData('')).not.toBeUndefined
  }));
});
