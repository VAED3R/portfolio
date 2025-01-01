import { Routes } from '@angular/router';
import { PasswordGameComponent } from './password-game/password-game.component';
import { HomeComponent } from './home/home.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', // Redirect to home when the path is empty
        pathMatch: 'full'   // Ensure that the full URL path matches
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'web-projects',
        component: WebProjectsComponent
    },
    {
        path: 'password-game',
        component: PasswordGameComponent
    },
    {
        path: '**', // Wildcard route for a 404 page
        redirectTo: 'home' // Redirect to home for any unknown routes
    }
];