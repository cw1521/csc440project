import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatCardModule
    ]
})
export class MaterialModule {}