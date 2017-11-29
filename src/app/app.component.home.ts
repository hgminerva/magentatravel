import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.home.html',
  styleUrls: ['./app.component.home.css']
})
export class AppComponentHome {
  title = 'home';

  constructor(private router: Router) {}

  goToPackage(packageNum) {
    this.router.navigate(['/packages/' + packageNum]).then(() => { window.scrollTo(0, 0) });       
  }

}