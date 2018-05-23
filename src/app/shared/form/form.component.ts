import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

// MODELS
import { event } from './../models/event/event';

// SERVICES
import {SnackBarService} from './../snack-bar/snack-bar.service';

@Component({selector: 'app-form', templateUrl: './form.component.html', styleUrls: ['./form.component.scss']})
export class FormComponent implements OnInit {

  @Output() clicked = new EventEmitter<event>()
  @Input() authorOrTitle: boolean = false

  public form : FormGroup

  constructor(private fb : FormBuilder, private snackBar : SnackBarService) {
    this.form = this.fb.group({
      'input': [''],
      'slideToggle': [false]
    })
  }

  ngOnInit() {}

  getData() {
    if (!this.form.get('input').value) {
      this.snackBar.openSnackBar('Put some data!', 'Close')
      return
    }
    this.clicked.emit({
      value: this.form.get('input').value,
      authorOrClient: this.authorOrTitle ? this.form.get('slideToggle').value : null
    })
  }

}
