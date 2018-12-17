import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  isAuth: Observable<boolean>;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuth = this.store.select(fromRoot.getIsAuth);
  }

  onLogout() {
    this.onClose();
    this.authService.logout();

  }

  onClose() {
    this.closeSidenav.emit();
  }
}
