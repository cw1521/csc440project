import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatIcon,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule
    ]
})
export class MaterialModule {}