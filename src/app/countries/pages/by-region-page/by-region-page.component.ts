import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public region: Country[] = [];

  constructor( private countriesService: CountriesService) { }

  ngOnInit(): void {
  }

  searchByRegion(region: string){
    this.countriesService.searchRegion( region)
    .subscribe( countries => {
      this.region = countries;
    })
  }


}
