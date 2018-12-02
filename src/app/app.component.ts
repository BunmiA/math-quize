import { Component } from '@angular/core';
import {Question} from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-quize';
  userName: string;
  userTime: number;
  questions: Array<Question>;

  onUserName(userName: string) {
    this.userName = userName;
  }
}
