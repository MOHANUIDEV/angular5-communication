import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
       item = new Subject <any>();

  constructor() { }

CreatedObject(data) {
  this.item.next(data);
}

SendItem() {
   return this.item.asObservable();
}

}
