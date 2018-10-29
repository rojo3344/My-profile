import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showImage:boolean ;
  name: string;
  email: string;
  messageContent: any;
  activateMessage: boolean;
  submitMessage: boolean = false;
  constructor(private navigate:Router) { }

  /* user will be redirected to home page after the form is submited*/
  redirectToHomePage(){
    this.navigate.navigate(['profile']);
  }

  sendMessage(messageInfo): void {
    console.log(messageInfo.name, messageInfo.email, messageInfo.messageContent);
  }


  ngOnInit(){

  }

}
