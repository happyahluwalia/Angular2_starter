import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { NavBarComponent } from './navbar.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'navbar', component: NavBarComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'users', component: UsersComponent},
  { path: "",  redirectTo: "navbar", pathMatch: "full"},
  { path: "*",  redirectTo: "navbar", pathMatch: "full"}
];


export const routedComponents : ModuleWithProviders 
            = RouterModule.forRoot(routes);