import { Component } from '@angular/core';
import { CatalogueComponent } from '../produits/catalogue.component';

@Component({
  selector: 'app-extensions',
  standalone: true,
  imports: [CatalogueComponent],
  template: `
    <app-catalogue
      category="extensions"
      categoryLabel="Extension de Cils"
      emoji="🖤"
      subtitle="Volume russe, classique, naturel, 3D mega volume — un regard inoubliable et professionnel."
      bgClass=""
    ></app-catalogue>
  `
})
export class ExtensionsComponent {}
