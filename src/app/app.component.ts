import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Glam Beauty by AK';

  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top on every route change
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  }
}
