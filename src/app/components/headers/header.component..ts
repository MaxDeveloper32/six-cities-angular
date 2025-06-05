import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule, UserInfoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  isHiddenNav = false;
  hiddenRoutes = ['/login', '/404'];

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const url = this.router.url;
      this.isHiddenNav = ['/login', '/404'].includes(url);
    });
  }

}
