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

  
  

  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.setSearchCategories();    
    this.categorySelected = this.searchCategory[0];
    this.accodRecords = null;
    this.isDisabled = true;

    this.accodService.getAccods().subscribe((records: Accod[]) => {
      //console.log(records);
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

  onSelectionChange(value: string) {
    this.categorySelected = value;
  }

  onSearch(value: string) {
    this.searchString = value;
    console.log(`Search parameter: ${value}\nCategory: ${this.categorySelected}\n`);
  }

}
