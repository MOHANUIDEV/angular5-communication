import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Subject} from 'rxjs';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  userForm: FormGroup;
  @Input()
  createdObject$ = new Subject<any>();
  userData = {};


  constructor(private _formbuilder: FormBuilder, private _productservice: ProductService) {}

  ngOnInit() {
    this.userForm = this._formbuilder.group({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    });
  }
  getData(data) {
    console.log(data);
    // this.userData.push(data);
    this.createdObject$.next(data);
    this._productservice.CreatedObject(data);

  }
}
