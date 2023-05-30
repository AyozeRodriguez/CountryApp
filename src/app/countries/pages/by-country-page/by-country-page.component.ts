import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  constructor( private countryService:CountriesService ) { }

  public country: Country[] = [];

  ngOnInit(): void {
  }

  searchByCountry(term: string){
    this.countryService.searchCountry( term )
    .subscribe( country => {
      this.country = country
    })
  }

}
