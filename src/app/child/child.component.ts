import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Input} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


// @input called data transfer from parent to child
  @Input() dataFromParent:string='';

  @Output() senddata:EventEmitter<any>=new EventEmitter<any>();
  

  senddata_to_parent(){

    this.senddata.emit('this is data from child');
  }

}
