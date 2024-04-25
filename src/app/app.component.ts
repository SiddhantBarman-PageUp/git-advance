import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThirdComponent } from './component/third/third/third.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,RouterLink,ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
