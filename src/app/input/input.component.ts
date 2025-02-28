import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  @Input() control: FormControl<any>;

  constructor(){
    this.control = new FormControl();
  }

  ngOnInit(){
    
  }
}
