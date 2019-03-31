﻿import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { LandingComponent } from './landing';
import { AuthGuard } from './_guards';
import { VerificationComponent } from './verification';
import { ChangePasswordComponent } from './home/change-password';
import { ProfileComponent } from './home/profile';
import { ForgotPasswordComponent } from './forgot-password';
import { Role } from './_models';
import { from } from 'rxjs';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: 'changePassword', component: ChangePasswordComponent},
            {path: 'profile', component: ProfileComponent},
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'confirmation/:token',
        component: VerificationComponent
    },
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'iforgot',
        component: ForgotPasswordComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);