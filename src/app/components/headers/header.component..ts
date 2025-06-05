import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { UserInfoComponent } from './user-info/user-info.component';

const HIDDEN_NAV_PATHS = new Set(['/login', '/404']);

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule, UserInfoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  isHiddenNav = false;

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isHiddenNav = HIDDEN_NAV_PATHS.has(this.router.url);
    });
  }

}
