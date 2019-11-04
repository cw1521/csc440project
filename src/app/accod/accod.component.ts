import { Component, OnInit } from '@angular/core';
import { Accod } from '../shared/Accod';
import { AccodService } from '../services/accod.service';



@Component({
  selector: 'app-accod',
  templateUrl: './accod.component.html',
  styleUrls: ['./accod.component.scss']
})


export class AccodComponent implements OnInit {
  accodRecords: Accod[];
  searchCategory: String[];
  categorySelected: String;
  searchString: String;
  isDisabled: boolean;
  searchResults: Accod[];
  hasSearched: boolean;
  numberOfRecordsFound: Number;

  
  

  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.setSearchCategories();    
    this.categorySelected = this.searchCategory[0];
    this.accodRecords = null;
    //this.isDisabled = true;
    this.searchResults = [];
    this.isDisabled = false;
    this.hasSearched = false;
    this.numberOfRecordsFound = 0;
    //this.load();
  }

  async load() {
    this.accodRecords = await this.accodService.getAccods();
    this.isDisabled = false;
  }


  setSearchCategories() {
    this.searchCategory = [
      "Age",
      "Sex",
      "Race",
      "Location"
    ];
  }

  onSelectionChange(value: String) {
    this.categorySelected = value;
  }


  async onSearch(value: string) {
    if (value.length > 0) {
      this.isDisabled = true;
      this.hasSearched = true;
      this.searchResults = await this.accodService.getAccodsByUrl(`/api/ods/${this.categorySelected}/${value}`);
      this.isDisabled = false;
      this.numberOfRecordsFound = this.searchResults.length;
      //console.log(this.searchResults);
    }
  }

}
