import { HeaderComponent } from './../../../../shared/src/lib/layout/header.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [HeaderComponent, RouterModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client-app';
}
