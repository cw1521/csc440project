import { Component, OnInit } from '@angular/core';
import { Accod } from '../shared/Accod';
import { AccodService } from '../services/accod.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accod',
  templateUrl: './accod.component.html',
  styleUrls: ['./accod.component.scss']
})
export class AccodComponent implements OnInit {
  accodRecords: Accod[];
  searchCategory: String[];
  recordSelected: Accod;


  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.setSearchCategories();
    this.accodService.getAccods().subscribe((records: Accod[]) => {
      console.log(records);
      this.accodRecords = records;
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

}
