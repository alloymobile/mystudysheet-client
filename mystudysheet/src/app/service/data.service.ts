import { Topic } from './../model/topic';
import { Grade } from './../model/grade';
import { Injectable } from '@angular/core';
import grades from '../../assets/mystudysheet.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  grades: Grade[];
  topic: Topic;
  constructor() {
    this.grades = [];
    this.topic = new Topic();
    if (grades && grades.length) {
      grades.forEach((g) => {
        this.grades.push(new Grade(g));
      });
    }
  }
}
