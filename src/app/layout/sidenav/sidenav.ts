import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatDividerModule
  ],
  templateUrl: './sidenav.html',
  styles: ``,
})
export class Sidenav {

}
