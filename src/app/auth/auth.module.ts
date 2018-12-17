import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';

@NgModule({
   declarations: [
      SignupComponent,
      LoginComponent
   ],
   imports: [
      ReactiveFormsModule,
      AngularFireAuthModule,
      SharedModule,
      AuthRoutingModule]
})

export class AuthModule { }
