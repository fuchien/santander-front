import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SnackBarService } from './../snack-bar/snack-bar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup

  constructor(
    private fb: FormBuilder,
    private snackBar: SnackBarService
  ) {
    this.form = this.fb.group({
      'input': ['']
    })
  }

  ngOnInit() {
  }

  getData() {
    if (!this.form.get('input').value) {
      this.snackBar.openSnackBar('Put some data!', 'Close')
      return
    }
  }

}
