import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Question} from '../question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() userName: String;

  seconds  = 0;
  minutes = 0;
  hours  = 0 ;
  time: string;
  mins = 0;
  t: any;
  finished = false;

  questions: Array<Question> = [];
  questionOne: Question = new Question(2, '1 + 2',  3);
  questionTwo: Question = new Question(2, '1 + 2',  3);
  questionThree: Question = new Question(2, '1 + 2',  3);
  questionFour: Question = new Question(2, '1 + 2',  3);
  questionFive: Question = new Question(2, '1 + 2',  3);

  questionForm = new FormGroup({
    questionOne: new FormControl(''),
    questionTwo: new FormControl(''),
    questionThree: new FormControl(''),
    questionFour: new FormControl(''),
    questionFive: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
    this.questions.push(this.questionOne, this.questionOne, this.questionTwo, this.questionThree, this.questionFour, this.questionFive);

    this.timer();

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.mins);

    console.warn(this.questionForm.value);
    this.stop();
    this.finished = true;

  }

  add() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }

    this.time = (this.hours ? (this.hours > 9 ? this.hours : '0' + this.hours) : '00') + ':'
      + (this.minutes ? (this.minutes > 9 ? this.minutes : '0' + this.minutes) : '00') +
      ':' + (this.seconds > 9 ? this.seconds : '0' + this.seconds);

    this.mins = this.minutes + (this.seconds / 60) + (this.hours * 60);
    this.timer();
    console.log(this.mins);
  }

  timer() {
    this.t = setTimeout(() => { this.add(); }, 1000);
  }
  stop() {
    clearTimeout(this.t);
  }

}
