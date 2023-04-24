import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  login() {
    const data = { username: this.username, password: this.password };
    this.http.post('http://localhost:9191/', data).subscribe(result => {
      // handle successful login
    }, error => {
      // handle login error
    });
  }

}
