import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  entryComponents: [
    MatDialogModule,
    MatButtonModule,
    ConfirmDialogComponent
  ],
  exports: [ConfirmDialogComponent]
})
export class UtilsModule { }
