import { Data } from './../model/data';
import { Content } from './../model/content';
import { Topic } from './../model/topic';
import { Subject } from './../model/subject';
import { Grade } from './../model/grade';
import { MyStudySheet } from './../mystudysheet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css'],
})
export class PrintComponent extends MyStudySheet implements OnInit {
  noOfOrders: number[];
  price: number;
  noOfSheet: number;
  totalCost: number;
  data: Data;
  subjects: Subject[];
  topics: Topic[];
  contents: Content[];
  constructor() {
    super();
    this.noOfOrders = [1];
    this.price = 0.1;
    this.noOfSheet = 1;
    this.totalCost = this.price * this.noOfSheet;
    this.data = new Data();
    this.subjects = [];
    this.topics = [];
    this.contents = [];
  }

  ngOnInit(): void {}

  selectGrade(gradeId: number) {
    this.data.gradeId = this.grades[gradeId].id;
    this.subjects = this.grades[gradeId].subjects;
  }

  selectSubject(subjectId: number) {
    this.data.subjectId = this.subjects[subjectId].id;
    this.topics = this.subjects[subjectId].topics;
  }

  selectTopic(topicId: number) {
    this.data.contentId = this.topics[topicId].id;
    this.contents = this.topics[topicId].contents;
  }

  selectContent(contentId: number) {}
}
