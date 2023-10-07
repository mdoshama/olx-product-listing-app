import {Component, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {EventEmitter} from "@angular/core";
import { Listing } from '../types';
import {ListingPageComponent} from "../listing-page/listing-page.component";
import {animate} from "@angular/animations";
import {fakeListings} from "../fake-data";

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.scss']
})
export class ListingDataFormComponent {

  @Input() buttonText: any;
  @Input() currentName = ''
  @Input() currentDescription = ''
  @Input() currentPrice = ''

  @Output() onSubmit = new EventEmitter<Listing>();

  name: string = '';
  description: string = '';
  price: string = '';



  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClick() {
    this.onSubmit.emit( {
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
  }

}
