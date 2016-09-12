import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : "navbar",
    templateUrl : "app/views/navbar.component.html"
})

export class NavBarComponent{
    constructor(private _router: Router){}

    gotoPosts(){
        this._router.navigate(["/posts"])
    }
    gotoUsers(){
        this._router.navigate(["/users"])
    }
}