import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('',[ Validators.required,Validators.minLength(3)]),
    cardNumber : new FormControl('',[ Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('',[ 
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('',[ 
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
 });

 constructor(){

 }

 get nameControl(): FormControl {
  return this.cardForm.get('name') as FormControl;
}

get cardNumberControl(): FormControl {
  return this.cardForm.get('cardNumber') as FormControl;
}

get expirationControl(): DateFormControl | null {
  const control = this.cardForm.get('expiration');
  return control instanceof DateFormControl ? control : null;
}

get securityCodeControl(): FormControl {
  return this.cardForm.get('securityCode') as FormControl;
}

onSubmit(){
  console.log('Form was submitted');
}

onResetClick(){
  this.cardForm.reset();
}
}
