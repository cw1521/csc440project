import { Component, OnInit } from '@angular/core';
import { Accod } from '../shared/Accod';
import { AccodService } from '../services/accod.service';
import { Observable } from 'rxjs';

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
  

  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.setSearchCategories();    
    this.categorySelected = this.searchCategory[0];

    this.accodService.getAccods().subscribe((records: Accod[]) => {
      console.log(records);
      this.accodRecords = records;
    });

    //this.accodRecords = JSON.parse(ods);

  }


  setSearchCategories() {
    this.searchCategory = [
      "Age",
      "Sex",
      "Race",
      "Location"
    ];
  }

  onSelectionChange(event) {
    console.log(event.source.selected.value);
  }

}
