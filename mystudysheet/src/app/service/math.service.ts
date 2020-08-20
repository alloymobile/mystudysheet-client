import { Question } from './../model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  MAX: number;
  ROW: number;
  COL: number;
  static id: number;
  constructor() {
    this.MAX = 10;
    this.ROW = 5;
    this.COL = 4;
    MathService.id = 1;
  }

  getAddition(gradeId: number): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        ques.operand2 = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        ques.operator = '+';
        ques.correctAnswer = ques.operand1 + ques.operand2;
        ques.id = MathService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getSubtraction(gradeId: number): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        let a = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        let b = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        if (a > b) {
          ques.operand1 = a;
          ques.operand2 = b;
        } else {
          ques.operand1 = b;
          ques.operand2 = a;
        }
        ques.operator = '-';
        ques.correctAnswer = ques.operand1 - ques.operand2;
        ques.id = MathService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getMultiplication(gradeId: number): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        ques.operand2 = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        ques.operator = 'x';
        ques.correctAnswer = ques.operand1 * ques.operand2;
        ques.id = MathService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getDivision(gradeId: number): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        ques.operand2 = this.rand(
          Math.pow(this.MAX, gradeId),
          Math.pow(this.MAX, gradeId - 1)
        );
        ques.operator = '/';
        ques.correctAnswer = ques.operand1 / ques.operand2;
        ques.id = MathService.id++;
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
