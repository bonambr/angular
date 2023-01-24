import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent {

  age: number;
  isStudent: boolean;
  income: number;
  info: string[];

  constructor(private http: HttpClient) { }

  onSubmit() {
    const answers = {
      age: this.age,
      isStudent: this.isStudent,
      income: this.income
    };
    this.http.post<string[]>
    ('http://localhost:8080/info', answers)
      .subscribe(response => this.info = response);
  }

}
