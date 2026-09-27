import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-portail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portail.component.html',
  styleUrl: './portail.component.css'
})
export class PortailComponent implements OnInit, AfterViewInit {
  featuredOngles: Product[] = [];
  featuredExtensions: Product[] = [];
  featuredHabits: Product[] = [];

  heroWords = ['GLAMOUR', 'BEAUTÉ', 'CONFIANCE'];
  currentWord = 0;
  displayWord = 'GLAMOUR';

  testimonials = [
    {
      name: 'Fatou D.',
      city: 'Dakar',
      text: 'Aïcha est une vraie professionnelle ! Mes extensions de cils sont parfaites, j\'ai eu tellement de compliments. Je reviens chaque mois !',
      stars: 5,
      avatar: '💆🏾‍♀️'
    },
    {
      name: 'Mariama S.',
      city: 'Apix, Dakar',
      text: 'Les ongles en gel permanent durent vraiment longtemps et le résultat est magnifique. Le cadre est chaleureux et les prix sont honnêtes.',
      stars: 5,
      avatar: '💅🏾'
    },
    {
      name: 'Aminata K.',
      city: 'Dakar',
      text: 'J\'ai commandé des vêtements et les produits cosmétiques bio. Qualité impeccable ! Livraison rapide. Je recommande à toutes mes amies.',
      stars: 5,
      avatar: '🛍️'
    }
  ];

  strengths = [
    {
      icon: '🌿',
      title: 'Produits Bio & Naturels',
      desc: 'Des cosmétiques sélectionnés pour tous types de peaux, formulés sans produits nocifs.'
    },
    {
      icon: '💎',
      title: 'Expertise Reconnue',
      desc: 'Des techniques maîtrisées et un savoir-faire professionnel pour des résultats durables.'
    },
    {
      icon: '🕐',
      title: 'Ouvert 24h/24',
      desc: 'Disponible tous les jours, à toute heure. Prenez rendez-vous selon votre emploi du temps.'
    },
    {
      icon: '💖',
      title: 'Cadre Chaleureux',
      desc: 'Une ambiance bienveillante où chaque cliente se sent unique, belle et valorisée.'
    }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.featuredOngles = this.productService.getByCategory('ongles').slice(0, 3);
    this.featuredExtensions = this.productService.getByCategory('extensions').slice(0, 3);
    this.featuredHabits = this.productService.getByCategory('habits').slice(0, 3);

    setInterval(() => {
      this.currentWord = (this.currentWord + 1) % this.heroWords.length;
      this.displayWord = this.heroWords[this.currentWord];
    }, 2500);
  }

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
