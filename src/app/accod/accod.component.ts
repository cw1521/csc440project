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
  accodRecords: Observable<Accod[]>;

  constructor(private accodService: AccodService) { }

  ngOnInit() {
    this.accodService.getAccods().subscribe(res => {
      ;
    });
  }

}
