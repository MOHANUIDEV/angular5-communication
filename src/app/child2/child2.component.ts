import { Component, OnInit, Input} from '@angular/core';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Input()
   outputObject$ = new Subject <any>();
    user = {};
  constructor() { }

  ngOnInit() {
    this.outputObject$.subscribe( (res) => {
            this.user = res ;
    });
  }

}
