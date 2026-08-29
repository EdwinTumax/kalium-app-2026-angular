import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './menu.html',
  styles: ``,
})
export class Menu {
  
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router) {
    
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  login () {
    this.router.navigate(['/login']);
  }

}
