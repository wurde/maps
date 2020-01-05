import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ]
})
export class MaterialModule {}
