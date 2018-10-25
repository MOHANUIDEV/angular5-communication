import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'communication';
  receivedObject$ = new Subject<any>();
  user = {};
  constructor( private _productservice: ProductService) {

  }

ngOnInit() {
  this._productservice.SendItem()
  .subscribe((res) => {
    this.user = res;
    });
}



}
