import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FillPipe } from './pipes/fill.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    TopBarComponent,
    FillPipe,
    SanitizePipe
  ],
  imports: [
    // Angular
    CommonModule,
    // Material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  exports: [
    ConfirmDialogComponent,
    TopBarComponent,
    FillPipe,
    SanitizePipe,
  ]
})
export class UtilsModule { }
