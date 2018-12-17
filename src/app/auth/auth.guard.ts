import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromRoot from '../app.reducer';

@Injectable()

export class AuthGuard implements CanActivate, CanLoad {
   path: ActivatedRouteSnapshot[];
   route: ActivatedRouteSnapshot;

   constructor(private store: Store<fromRoot.State>) { }

   canActivate(): Observable<boolean> {
      return this.store.select(fromRoot.getIsAuth).pipe(take(1));
   }

   canLoad(route: Route): Observable<boolean> {
      return this.store.select(fromRoot.getIsAuth).pipe(take(1));
   }
}
