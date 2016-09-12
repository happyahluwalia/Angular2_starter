import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';

import { routedComponents } from './app.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    
        routedComponents,
    ],
    declarations: [AppComponent, NavBarComponent, PostsComponent, UsersComponent],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
