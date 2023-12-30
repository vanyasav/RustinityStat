import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {StatsDashboardComponent} from './core/stats-dashboard/stats-dashboard.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    StatsDashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RX Rustinity EU Large stats';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']); // Add languages to the list
    translate.setDefaultLang('ru'); // Set default language

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|es|fr/) ? browserLang : 'en');
  }
}
