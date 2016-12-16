import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class ToDoListComponent implements OnInit {

  toDoForm;

  constructor() { }

  ngOnInit() {

    this.toDoForm = new FormGroup({
      toDo: new FormControl('', Validators.required),
    });

  }

  addToDo() {

  }

}
