import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Menu } from './menu/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Sidenav } from './sidenav/sidenav';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    Menu,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    Sidenav,
    MatDivider

  ],
  templateUrl: './layout.html',
  styles: ``,
})
export class Layout {

  isSidenavOpen = signal(false);

  toogleSidenav() {
    this.isSidenavOpen.update(v => !v);
  }

}
