import { Component, OnInit } from '@angular/core';
import { student } from '../students'
import { STUDENT } from '../mock-students';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  stud = STUDENT;
  name = ''
  students : student = {
    id : 1,
    name : ''
  };
  constructor() { }

  ngOnInit() {
  }

}
