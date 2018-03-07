import { Component, OnInit } from '@angular/core';
import { student } from '../students'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  name = 'Mathan'
  students : student = {
    id : 1,
    name : 'Ram'
  };
  constructor() { }

  ngOnInit() {
  }

}
