import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule
    ]
})
export class MaterialModule {}