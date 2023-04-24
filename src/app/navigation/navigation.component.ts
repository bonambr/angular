import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router) { }

  goToTimeline() {
    this.router.navigateByUrl('/timeline', { skipLocationChange: true }).then(() => {
      window.history.replaceState({}, '', '/timeline');
      location.reload();
    });
  };

  goToUserLogin() {
    this.router.navigateByUrl('/userlogin', { skipLocationChange: true }).then(() => {
      window.history.replaceState({}, '', '/userlogin');
      location.reload();
    });
  }
}
