import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Accueil',    path: '/' },
    { label: 'Ongles',     path: '/ongles' },
    { label: 'Extensions', path: '/extensions' },
    { label: 'Vêtements',  path: '/habits' },
    { label: 'À Propos',   path: '/about' },
    { label: 'Contact',    path: '/contact' },
  ];

  socials = [
    { label: 'WhatsApp',  href: 'https://wa.me/221776711897', icon: 'wa' },
    { label: 'Instagram', href: '#', icon: 'ig' },
    { label: 'Facebook',  href: '#', icon: 'fb' },
    { label: 'TikTok',    href: '#', icon: 'tt' },
  ];
}
