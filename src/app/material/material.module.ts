import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    CommonModule
  ]
})
export class MaterialModule {}
