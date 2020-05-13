import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private number:number= 2000;

 isVisible:Boolean = true;
 switch(){
   this.isVisible = !this.isVisible;
 }

  name:string= "Eslam";
user={
  name:"Eslam"
}


  UpdateValue(){
    this.user.name = "Eslam Dahshan"
  }

  get counter(){
  return  this.number;
  }


set counter(value){
   this.number =value;
  }

  Increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }




}
