import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit , AfterContentChecked ,AfterViewInit , AfterViewChecked , OnDestroy {
 
  
  private myNumber:number ;

  @Input() myNewName:any ;
  

  constructor() { }
  @Input() 
  set myNewNumber(number:number){
    this.myNumber = number ;
  }
  get myNewNumber(){
   return this.myNumber ;
  }

  ngOnChanges(changes:SimpleChanges){
    const newNumberChange:SimpleChange = changes.myNewNumber;
    
    console.log("Previous Value - (ngOnChanges)", newNumberChange.previousValue);
    console.log("Current Value - (ngOnChanges)", newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }
  ngOnInit(): void {
    console.log("Value - (ngOnInit)", this.myNewNumber);
  }
  ngDoCheck(){
    console.log("Value - (ngDoCheck)", this.myNewName , this.myNewNumber)
  }
  ngAfterContentInit(){
    console.log("Value - (ngAfterContentInit)", "Hi!!!!")
  }
  ngAfterContentChecked(){
    console.log("Value executed - (ngAfterContentChecked)")
    /* alert("hi"); */
  }

  ngAfterViewInit(){
    console.log("Value executed - (ngAfterViewInit)")
  }
  ngAfterViewChecked(){
    console.log("Value executed - (ngAfterViewChecked)")
    /* alert("hi"); */
  }
  ngOnDestroy(){
    console.log("Component has been destroyed - (ngOnDestroy)")
  }
  
  
}
