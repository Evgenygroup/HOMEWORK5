import { Component, OnInit } from '@angular/core';
import {PrintService} from '../../../angular-course/src/app/print.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  requestDataForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    }
  );

  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    this.requestDataForm.get('name').setValidators(Validators.required);
    this.requestDataForm.get('email').setValidators(Validators.email);
    this.requestDataForm.get('password').setValidators(Validators.required);
  }

  handleFormSubmit() {
    if (this.requestDataForm.valid) {
      this.printService.print(this.requestDataForm.value);
    }
  }

}
