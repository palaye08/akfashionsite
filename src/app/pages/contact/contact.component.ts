import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  schedule = [
    { day: 'Lundi',    hours: 'Ouvert 24h/24' },
    { day: 'Mardi',    hours: 'Ouvert 24h/24' },
    { day: 'Mercredi', hours: 'Ouvert 24h/24' },
    { day: 'Jeudi',    hours: 'Ouvert 24h/24' },
    { day: 'Vendredi', hours: 'Ouvert 24h/24' },
    { day: 'Samedi',   hours: 'Ouvert 24h/24' },
    { day: 'Dimanche', hours: 'Ouvert 24h/24' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
