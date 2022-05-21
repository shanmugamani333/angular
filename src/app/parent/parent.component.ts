import { Component, OnInit } from '@angular/core';
import { Sample } from '../sample';
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
   fromchild:any="parent";


   students:Sample[]=[
     {regno:12,name:'shan'},
     {regno:13,name:'krish'},
     {regno:14,name:'murali'},
     {regno:15,name:'sibin'},
     {regno:16,name:'bill'},

    ]


   receivedata(event:any){
    this.name=event;

   }

}
