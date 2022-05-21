import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   name:string='shanmugamani';
   fromchild:any="parent works!";


   receivedata(event:any){
    this.fromchild=event;

   }

}
