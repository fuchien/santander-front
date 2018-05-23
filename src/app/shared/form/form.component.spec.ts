import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarService } from '../snack-bar/snack-bar.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        SnackBarService
      ],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate function getData', () => {
    component.form.get('input').setValue('')
    expect(component.getData()).toBeUndefined
    component.form.get('input').setValue('teste')
    expect(component.getData()).toBeUndefined
    component.authorOrTitle = true
    expect(component.getData()).toBeUndefined
  });
});
