import { Routes } from '@angular/router';
import { PortailComponent }        from './pages/portail/portail.component';
import { OnglesComponent }         from './pages/services/ongles.component';
import { ExtensionsComponent }     from './pages/services/extensions.component';
import { HabitsComponent }         from './pages/services/habits.component';
import { AboutComponent }          from './pages/about/about.component';
import { ContactComponent }        from './pages/contact/contact.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';

export const routes: Routes = [
  { path: '',          component: PortailComponent,        title: 'Glam Beauty by AK — Institut de Beauté Dakar' },
  { path: 'ongles',   component: OnglesComponent,         title: 'Nos Ongles — Glam Beauty by AK' },
  { path: 'extensions', component: ExtensionsComponent,   title: 'Extension de Cils — Glam Beauty by AK' },
  { path: 'habits',   component: HabitsComponent,         title: 'Vêtements Unisexe — Glam Beauty by AK' },
  { path: 'about',    component: AboutComponent,          title: 'À Propos — Glam Beauty by AK' },
  { path: 'contact',  component: ContactComponent,        title: 'Contact — Glam Beauty by AK' },
  { path: 'produit/:id', component: DetailsProductComponent, title: 'Détail Produit — Glam Beauty by AK' },
  { path: '**',       redirectTo: '' },
];
