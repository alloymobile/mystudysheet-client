import { MyStudySheetService } from './../../mystudysheetservice';
import { Question } from './../../../model/question';
import { Data } from './../../../model/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DivisionService extends MyStudySheetService {
  static id: number;
  MAX: number;
  constructor() {
    super();
    DivisionService.id = 1;
    this.MAX = 10;
  }

  getDivision(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.contentId) {
      case 1:
      case 4:
      case 5:
        return this.getDivisionMix(data, ROW, COL);
        break;
      // case 6:
      //   return this.getDivisionLong(data, ROW, COL);
      //   break;
      default:
        return this.getDivisionMix(data, ROW, COL);
        break;
    }
  }

  getDivisionMix(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 2:
      case 3:
        let max = this.MAX;
        return this.getDivisionMixGradeTwoToThree(data, ROW, COL, max);
        break;
    }
    return null;
  }

  getDivisionMixGradeTwoToThree(
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
        ques.operand1 = String(Number(opt1) * Number(opt2));
        ques.operand2 = String(opt2);
        if (data.gradeId === 2) {
          if (ques.operand2.length === 1) {
            ques.operand2 = ' ' + ques.operand2;
          }
        } else if (data.gradeId === 3) {
          if (ques.operand2.length === 1) {
            ques.operand2 = ' ' + ques.operand2;
          } else if (ques.operand2.length === 2) {
            ques.operand2 = '  ' + ques.operand2;
          }
        }
        ques.operator = '/';
        ques.correctAnswer = Number(ques.operand1) / Number(ques.operand2);
        ques.answerLocation = this.random(3);
        ques.id = DivisionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }
}
