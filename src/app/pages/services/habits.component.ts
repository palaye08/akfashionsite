import { Component } from '@angular/core';
import { CatalogueComponent } from '../produits/catalogue.component';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CatalogueComponent],
  template: `
    <app-catalogue
      category="habits"
      categoryLabel="Vêtements Unisexe"
      emoji="👗"
      subtitle="Mode contemporaine, toutes tailles disponibles — du casual chic aux tenues de cérémonie."
      bgClass="cream"
    ></app-catalogue>
  `
})
export class HabitsComponent {}
