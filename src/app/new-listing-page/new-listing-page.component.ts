import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss']
})
export class NewListingPageComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private router: Router) {
  }

  onSubmit(): void {
    alert('Listing has been created')
    this.router.navigateByUrl('/listings')
  }
}
