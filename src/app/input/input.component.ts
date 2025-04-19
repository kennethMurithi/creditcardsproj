import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  @Input() control: FormControl;
  @Input() label: string = '';

  constructor(){
    this.control = new FormControl();
  }

  ngOnInit(){
    
  }

  showErrors(){
    const {dirty, touched, errors } = this.control;
    return dirty && touched && errors
  }
}
