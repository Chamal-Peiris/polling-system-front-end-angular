import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "";
  invalid=false;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  enter(): void {
    if (this.userService.login(this.name)) {
      alert('Goda');
      this.invalid=false;
    } else {
      alert('Kachal');
      this.invalid=true;
    }
  }
}
