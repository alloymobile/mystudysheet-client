import { MyStudySheetService } from './../../mystudysheetservice';
import { Question } from './../../../model/question';
import { Data } from './../../../model/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiplicationService extends MyStudySheetService {
  static id: number;
  MAX: number;
  constructor() {
    super();
    MultiplicationService.id = 1;
    this.MAX = 10;
  }

  getMultiplication(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.contentId) {
      case 1:
      case 4:
      case 5:
        return this.getMultiplicationMix(data, ROW, COL);
        break;
      // case 6:
      //   return this.getMultiplicationLong(data, ROW, COL);
      //   break;
      default:
        return this.getMultiplicationMix(data, ROW, COL);
        break;
    }
  }

  getMultiplicationMix(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 2:
      case 3:
        let max = this.MAX;
        return this.getMultiplicationMixGradeTwoToThree(data, ROW, COL, max);
        break;
    }
    return null;
  }

  getMultiplicationMixGradeTwoToThree(
    data: Data,
    ROW: number,
    COL: number,
    MAX: number
  ): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < ROW; i++) {
      question = [];
      for (let j = 0; j < COL; j++) {
        ques = new Question();
        let opt1 = String(this.rand(MAX * (data.gradeId - 1), 0));
        let opt2 = String(this.rand(MAX * (data.gradeId - 1), 0));
        if (Number(opt1) >= Number(opt2)) {
          ques.operand1 = opt1;
          ques.operand2 = opt2;
        } else {
          ques.operand1 = opt2;
          ques.operand2 = opt1;
        }
        if (data.gradeId === 3) {
          if (ques.operand1.length === 1) {
            ques.operand1 = ' ' + ques.operand1;
          }
          if (ques.operand2.length === 1) {
            ques.operand2 = ' ' + ques.operand2;
          }
        }
        ques.operator = 'x';
        ques.correctAnswer = Number(ques.operand1) * Number(ques.operand2);
        ques.answerLocation = this.random(3);
        ques.id = MultiplicationService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }
}
