import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor() { }
loginForm= new FormGroup({
  email: new FormControl('',Validators.required)
})
get email(){
  return this.loginForm.get('email')
}
  ngOnInit(): void {
  }

}
