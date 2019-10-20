import { Component, OnInit } from '@angular/core';
import { Accod } from '../shared/Accod';
import { AccodService } from '../services/accod.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

var ods = require('../../assets/drug-od');


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

  
  

  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.setSearchCategories();    
    this.categorySelected = this.searchCategory[0];
    this.accodRecords = null;
    this.isDisabled = true;
    this.searchResults = null;

    this.accodService.getAccods().subscribe((records: Accod[]) => {
      this.accodRecords = records;
      this.isDisabled = false;
    });
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

  onSearch(value: String) {
    this.searchString = value;
    this.searchResults = this.accodRecords.filter((accod : Accod) => {
      console.log(`${accod[`${this.categorySelected}`]}\n`);
      if (accod[`${this.categorySelected}`])
        return accod[`${this.categorySelected}`].toLowerCase() === value.toLowerCase();
      else return false;
    });
  }

}
