import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "";
  invalid=false;
  @ViewChild("txtName")
  txtName!:ElementRef<HTMLInputElement>;
  constructor(private userService: UserService,private routerservice:Router) {
  }

  ngOnInit(): void {
   if( this.userService.getPrincipal()){
     this.routerservice.navigateByUrl('/dashboard');
   }


  }

  enter(): void {
    if (this.userService.login(this.name)) {
      alert('Goda');
      this.invalid=false;
      this.routerservice.navigateByUrl('/dashboard')
    } else {
      alert('Kachal');
      this.invalid=true;
      this.txtName.nativeElement.select();
      this.txtName.nativeElement.focus();
    }
  }
}
