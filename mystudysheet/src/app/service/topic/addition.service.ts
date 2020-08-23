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

  getAddition(content: Content, ROW: number, COL: number): Question[][] {
    switch (content.id) {
      case 1:
      case 2:
        return this.getAdditionMix(content, ROW, COL);
        break;
      case 3:
        return this.getAdditionLong(content);
    }
  }

  getAdditionMix(content: Content, ROW: number, COL: number): Question[][] {
    switch (content.gradeId) {
      case 1:
        return this.getAdditionMixGradeOne(content, ROW, COL);
        break;
    }
    return null;
  }

  getAdditionLong(content: Content): Question[][] {
    return null;
  }

  getAdditionMixGradeOne(
    content: Content,
    ROW: number,
    COL: number
  ): Question[][] {
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
