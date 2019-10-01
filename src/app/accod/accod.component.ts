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

  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.accodService.getAccods().then(data => {
      this.accodRecords = data;
    }, err => console.error(err));
  }

}
