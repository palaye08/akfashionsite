import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit, AfterViewInit {
  @Input() category!: string;
  @Input() categoryLabel!: string;
  @Input() emoji!: string;
  @Input() subtitle!: string;
  @Input() bgClass: string = '';

  products: Product[] = [];
  activeFilter: string = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getByCategory(this.category as any);
  }

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
