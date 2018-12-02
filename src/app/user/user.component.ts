import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = new FormControl('');
  @Output() userName = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    // this.name.setValue('Nancy');
    // this.userName = this.name.value;
    this.userName.emit(this.name.value);
  }

}
