import { MyStudySheetService } from './../../mystudysheetservice';
import { Data } from '../../../model/data';
import { Question } from '../../../model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubtractionService extends MyStudySheetService {
  static id: number;
  MAX: number;
  constructor() {
    super();
    SubtractionService.id = 1;
    this.MAX = 10;
  }

  createNumberSet(MAX: number): number[] {
    let numSet = [];
    for (let i = 0; i < MAX; i++) {
      numSet.push(i);
    }
    return numSet;
  }

  getSubtraction(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.contentId) {
      case 1:
      case 4:
      case 5:
        return this.getSubtractionMix(data, ROW, COL);
        break;
      case 2:
        return this.getSubtractionNoRegroup(data, ROW, COL);
        break;
      case 3:
        return this.getSubtractionRegrouping(data, ROW, COL);
        break;
      case 6:
        return this.getSubtractionLong(data, ROW, COL);
        break;
      default:
        return this.getSubtractionMix(data, ROW, COL);
        break;
    }
  }

  getSubtractionMix(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
      case 2:
      case 3:
        let max = this.MAX;
        return this.getSubtractionMixGradeOneToThree(data, ROW, COL, max);
        break;
    }
    return null;
  }

  getSubtractionNoRegroup(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
      case 2:
      case 3:
        let max = this.MAX;
        return this.getSubtractionNoRegroupingGradeOneToThree(
          data,
          ROW,
          COL,
          max
        );
        break;
    }
    return null;
  }

  getSubtractionRegrouping(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
      case 2:
      case 3:
        let max = this.MAX;
        return this.getSubtractionRegroupingGradeOneToThree(
          data,
          ROW,
          COL,
          max
        );
        break;
    }
    return null;
  }

  getSubtractionLong(data: Data, ROW: number, COL: number): Question[][] {
    return null;
  }

  getSubtractionMixGradeOneToThree(
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
        ques.operand1 = '';
        ques.operand2 = '';
        let opt1 = String(this.rand(Math.pow(MAX, data.gradeId), 0));
        let opt2 = String(this.rand(Math.pow(MAX, data.gradeId), 0));
        if (Number(opt1) >= Number(opt2)) {
          ques.operand1 = opt1;
          ques.operand2 = opt2;
        } else {
          ques.operand1 = opt2;
          ques.operand2 = opt1;
        }
        if (data.gradeId === 2) {
          if (ques.operand1.length === 1) {
            ques.operand1 = ' ' + ques.operand1;
          }
          if (ques.operand2.length === 1) {
            ques.operand2 = ' ' + ques.operand2;
          }
        } else if (data.gradeId === 3) {
          if (ques.operand1.length === 1) {
            ques.operand1 = ' ' + ques.operand1;
          } else if (ques.operand1.length === 2) {
            ques.operand1 = '  ' + ques.operand1;
          }
          if (ques.operand2.length === 1) {
            ques.operand2 = ' ' + ques.operand2;
          } else if (ques.operand2.length === 2) {
            ques.operand2 = '  ' + ques.operand2;
          }
        }
        ques.operator = '-';
        ques.correctAnswer = Number(ques.operand1) - Number(ques.operand2);
        ques.answerLocation = this.random(3);
        ques.id = SubtractionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getSubtractionNoRegroupingGradeOneToThree(
    data: Data,
    ROW: number,
    COL: number,
    MAX: number
  ): Question[][] {
    let numberSet = this.createNumberSet(MAX);
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < ROW; i++) {
      question = [];
      for (let j = 0; j < COL; j++) {
        ques = new Question();
        ques.operand1 = '';
        ques.operand2 = '';
        let opt1 = '';
        let opt2 = '';
        for (let k = 0; k < data.gradeId; k++) {
          let temp = this.rand(MAX, 0);
          opt1 = opt1 + temp;
          if (numberSet && numberSet.length > 0) {
            let noRegroup = numberSet.filter((n) => temp - n >= 0);
            let count =
              noRegroup && noRegroup.length > 0 ? noRegroup.length : 0;
            let index = this.random(count);
            opt2 = opt2 + noRegroup[index];
          }
        }
        ques.operand1 = opt1;
        ques.operand2 = opt2;
        ques.operator = '-';
        ques.correctAnswer = Number(ques.operand1) - Number(ques.operand2);
        ques.id = SubtractionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getSubtractionRegroupingGradeOneToThree(
    data: Data,
    ROW: number,
    COL: number,
    MAX: number
  ): Question[][] {
    let numberSet = this.createNumberSet(MAX);
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < ROW; i++) {
      question = [];
      for (let j = 0; j < COL; j++) {
        ques = new Question();
        ques.operand1 = '';
        ques.operand2 = '';
        let opt1 = '';
        let opt2 = '';
        for (let k = 0; k < data.gradeId; k++) {
          let temp = this.rand(MAX, 0);
          if (k === 0) {
            opt1 = opt1 + temp;
            if (numberSet && numberSet.length > 0) {
              let regroup = numberSet.filter((n) => temp - n > 0);
              let count = regroup && regroup.length > 0 ? regroup.length : 0;
              let index = this.random(count);
              opt2 = opt2 + regroup[index];
            }
          } else {
            opt1 = opt1 + temp;
            if (numberSet && numberSet.length > 0) {
              let regroup = numberSet.filter((n) => temp - n <= 0);
              let count = regroup && regroup.length > 0 ? regroup.length : 0;
              let index = this.random(count);
              opt2 = opt2 + regroup[index];
            }
          }
        }
        ques.operand1 = opt1;
        ques.operand2 = opt2;
        ques.operator = '-';
        ques.correctAnswer = Number(ques.operand1) - Number(ques.operand2);
        ques.id = SubtractionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }
}
