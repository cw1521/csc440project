import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule
    ]
})
export class MaterialModule {}