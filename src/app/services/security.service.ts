import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private cookieService : CookieService, private router: Router) { }

  checkSecurity(){
    const cookie = this.cookieService.get('limonnana');
    console.log(" The Cookie value: " + cookie);
    if(cookie !== "" && cookie !== undefined){
      let cookieJson = JSON.parse(cookie);
      console.log(" The Cookie Json value: " + cookieJson.userId + " " + cookieJson.token);
      let userId = cookieJson.userId;
      let token = cookieJson.token;
    }else{
      this.router.navigate(['login']);
    }

  }

}
