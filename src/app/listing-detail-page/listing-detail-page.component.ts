import {Component, OnInit, Type} from '@angular/core';
import {Listing} from "../types";
import {fakeListings} from "../fake-data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.scss']
})
export class ListingDetailPageComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {

  }


  listing : any;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((data) => data.id === id)
  }

}
