import { Topic } from './../model/topic';
import { Subject } from './../model/subject';
import { DataService } from './../service/data.service';
import { Grade } from './../model/grade';
import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  grades: Grade[];
  subjects: Subject[];
  topics: Topic[];
  topic: Topic;
  constructor(private dataService: DataService, private routerService: Router) {
    this.grades = this.dataService.grades;
    this.subjects = [];
    this.topic = new Topic();
  }

  ngOnInit(): void {}

  selectGrade(grade: Grade) {
    this.subjects = grade.subjects ? grade.subjects : [];
    this.topic.gradeId = grade.id;
  }

  selectSubject(subject: Subject) {
    this.topics = subject.topics ? subject.topics : [];
    this.topic.subjectId = subject.id;
  }

  selectTopic(topic: Topic) {
    this.topic.id = topic.id;
    this.topic.name = topic.name;
    this.dataService.topic = this.topic;
    this.routerService.navigate(['/worksheet']);
  }
}
