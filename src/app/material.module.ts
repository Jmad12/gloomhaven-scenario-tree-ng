import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatSnackBarModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatSnackBarModule
    ],
    providers: [ ]
  })
  export class MaterialModule { }