import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {fakeListings} from "../fake-data";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss']
})
export class EditListingPageComponent implements OnInit{

  listing: any

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id == id);
  }

  onSubmit(): void {
    alert(`Changes has been saved successfully`)
    this.router.navigateByUrl('/listings');
  }

}
