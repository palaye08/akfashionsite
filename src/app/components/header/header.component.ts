import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Accueil',    path: '/' },
    { label: 'Ongles',     path: '/ongles' },
    { label: 'Extensions', path: '/extensions' },
    { label: 'Vêtements',  path: '/habits' },
    { label: 'À Propos',   path: '/about' },
    { label: 'Contact',    path: '/contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
