import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccodService } from '../services/accod.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],  
  providers: [
    AccodService
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) throw new Error("\nCore Module Error.\n");
  }
}
