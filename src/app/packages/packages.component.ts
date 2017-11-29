import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent  {
  private title = 'packages';

  private packageNum1 = false;
  private packageNum2 = false;
  private packageNum3 = false;
  private packageNum4 = false;
  private packageNum5 = false;
  private packageNum6 = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router){            
  }
  
  ngOnInit() {
    this.route.params.subscribe( params => {
      switch(params.id) {
        case '1': { this.packageNum1 = true; break; }
        case '2': { this.packageNum2 = true; break; } 
        case '3': { this.packageNum3 = true; break; } 
        case '4': { this.packageNum4 = true; break; } 
        case '5': { this.packageNum5 = true; break; } 
        case '6': { this.packageNum6 = true; break; } 
      }
    });
  }

}