import { Component } from '@angular/core';
import { CatalogueComponent } from '../produits/catalogue.component';

@Component({
  selector: 'app-ongles',
  standalone: true,
  imports: [CatalogueComponent],
  template: `
    <app-catalogue
      category="ongles"
      categoryLabel="Nos Ongles"
      emoji="💅"
      subtitle="Gel permanent, nail art, capsules, manucure & pédicure — des ongles parfaits qui durent."
      bgClass="dark"
    ></app-catalogue>
  `
})
export class OnglesComponent {}
