import { Data } from './../../model/data';
import { Content } from './../../model/content';
import { Question } from './../../model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdditionService {
  MAX: number;
  static id: number;
  constructor() {
    this.MAX = 10;
    AdditionService.id = 1;
  }

  getAddition(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.contentId) {
      case 1:
      case 4:
        return this.getAdditionMix(data, ROW, COL);
        break;
      case 3:
        return this.getAdditionLong(data);
    }
  }

  getAdditionMix(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
        return this.getAdditionMixGradeOne(data, ROW, COL);
        break;
    }
    return null;
  }

  getAdditionLong(data: Data): Question[][] {
    return null;
  }

  getAdditionMixGradeOne(data: Data, ROW: number, COL: number): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < ROW; i++) {
      question = [];
      for (let j = 0; j < COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(this.MAX, 0);
        ques.operand2 = this.rand(this.MAX, 0);
        ques.operator = '+';
        ques.correctAnswer = ques.operand1 + ques.operand2;
        ques.id = AdditionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  // using Math.floor
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
