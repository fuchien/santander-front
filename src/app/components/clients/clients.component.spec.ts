import { ClientsService } from './clients.service';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ClientsComponent } from './clients.component';
import { SnackBarService } from '../../shared/snack-bar/snack-bar.service';
import { SharedModule } from '../../shared/shared/shared.module';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { inject } from '@angular/core';
import { of, throwError } from 'rxjs'

describe('ClientsComponent', () => {

  let injector: TestBed;
  let service: ClientsService;
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        SharedModule
      ],
      declarations: [
        ClientsComponent
      ],
      providers: [
        ClientsService,
        SnackBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    service = injector.get(ClientsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate function passingData', () => {
    const response = []
    spyOn(service, 'getData').and.returnValue(of(response))
    component.passingData({value: '', authorOrClient: false});
    fixture.detectChanges();
    expect(component.clients).toEqual([])
  });

  it('validate function passingData ERROR', () => {
    spyOn(service, 'getData').and.returnValue(throwError({status: 404}))
    component.passingData({value: '', authorOrClient: false});
    fixture.detectChanges();
    expect(component.clients).not.toBeUndefined
  });
});
