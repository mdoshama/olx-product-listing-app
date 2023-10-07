import {Component, OnInit} from '@angular/core';
import {Listing} from "../types";
import {fakeListings} from "../fake-data";

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.scss']
})
export class MyListingPageComponent implements OnInit{

  listings: Listing[] = [];
  ngOnInit(): void {
    this.listings = fakeListings;
  }

  deleteListing(listingId: string): void {
    alert(`Your Listing has been deleted ${listingId}`)
  }

}
