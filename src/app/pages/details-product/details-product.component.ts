import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit, AfterViewInit {
  product: Product | undefined;
  similarProducts: Product[] = [];
  activeImage = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getById(id);
      if (this.product) {
        this.similarProducts = this.productService.getSimilar(this.product, 4);
        this.activeImage = 0;
      }
    });
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

  setImage(i: number) {
    this.activeImage = i;
  }

  getCategoryRoute(cat: string): string {
    const map: Record<string, string> = {
      ongles: '/ongles',
      extensions: '/extensions',
      habits: '/habits',
    };
    return map[cat] || '/';
  }
}
