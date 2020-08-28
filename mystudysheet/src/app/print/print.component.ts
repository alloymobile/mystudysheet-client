import { Print } from './../model/print';
import { MyStudySheet } from './../mystudysheet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css'],
})
export class PrintComponent extends MyStudySheet implements OnInit {
  noOfOrders: Print[];
  total: string;
  constructor() {
    super();
    this.noOfOrders = [];
    this.total = '';
  }

  ngOnInit(): void {}

  selectGrade(gradeId: number, orderRow: number) {
    this.noOfOrders[orderRow].subjects = this.noOfOrders[orderRow].grades[
      gradeId
    ].subjects;
  }

  selectSubject(subjectId: number, orderRow: number) {
    this.noOfOrders[orderRow].topics = this.noOfOrders[orderRow].subjects[
      subjectId
    ].topics;
  }

  selectTopic(topicId: number, orderRow: number) {
    this.noOfOrders[orderRow].contents = this.noOfOrders[orderRow].topics[
      topicId
    ].contents;
  }

  selectContent(contentId: number) {}

  addNewRow() {
    let print = new Print();
    print.grades = this.grades;
    this.noOfOrders.push(print);
  }

  calculateRowTotal(no: Print) {
    no.totalCost = String((no.noOfSheet * no.price).toFixed(2));
    this.total = String((Number(this.total) + Number(no.totalCost)).toFixed(2));
  }
}
