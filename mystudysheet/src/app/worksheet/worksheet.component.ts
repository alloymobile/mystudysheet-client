import { DataService } from './../service/data.service';
import { Topic } from './../model/topic';
import { Question } from './../model/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css'],
})
export class WorksheetComponent implements OnInit {
  topic: Topic;
  question: Question;
  questions: Question[];
  MAX: number;
  totalQuestion: number;
  static id: number;

  constructor(private dataService: DataService) {
    this.topic = dataService.topic;
    this.totalQuestion = 20;
    this.MAX = 10;
    this.question = new Question();
    this.questions = [];
    WorksheetComponent.id = 1;
  }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion() {
    switch (this.topic.gradeId) {
      case 1:
        this.getOne();
        break;
      case 2:
        this.getTwo();
        break;
      case 3:
        this.getThree();
        break;
    }
  }

  getOne() {
    switch (this.topic.subjectId) {
      case 1:
        this.getMath();
        break;
      case 2:
        this.getEnglish();
        break;
      case 3:
        this.getScience();
        break;
    }
  }

  getTwo() {}

  getThree() {}

  getMath() {
    switch (this.topic.id) {
      case 1:
        this.questions = this.getAddition();
        break;
      case 2:
        this.questions = this.getSubtraction();
        break;
      case 3:
        this.questions = this.getMultiplication();
        break;
    }
  }

  getEnglish() {}

  getScience() {}

  getAddition(): Question[] {
    let question: Question;
    let questions: Question[] = [];
    for (let i = 0; i < this.totalQuestion; i++) {
      question = new Question();
      question.operand1 = this.rand(Math.pow(this.MAX, this.topic.gradeId));
      question.operand2 = this.rand(Math.pow(this.MAX, this.topic.gradeId));
      question.operator = '+';
      question.correctAnswer = this.question.operand1 + this.question.operand2;
      question.id = WorksheetComponent.id++;
      questions.push(question);
    }
    return questions;
  }

  getSubtraction(): Question[] {
    return null;
  }

  getMultiplication(): Question[] {
    return null;
  }

  // using Math.floor
  rand(maxLimit) {
    const rand = Math.random() * maxLimit;
    return Math.floor(rand);
  }
}
