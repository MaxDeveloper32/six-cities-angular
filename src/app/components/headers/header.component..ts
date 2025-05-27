import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  router = inject(Router);
  hiddenRoutes = ['/login', '/404'];

  isActive() {
    return this.router.url === '/';
  }

  isHiddenRoute(): boolean {
    const url = this.router.url;
    return ['/login', '/404'].includes(url);
  }
}
