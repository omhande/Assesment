import { Component } from '@angular/core';
import { PopUpComponent } from './Pop-up/pop-up/pop-up.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InviteCandidate';
  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(PopUpComponent,{
      width: '850px',
    })
  }

}
