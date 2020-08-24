import { Data } from '../../../model/data';
import { Question } from '../../../model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdditionService {
  static id: number;
  MAX: number;
  constructor() {
    AdditionService.id = 1;
    this.MAX = 10;
  }

  createNumberSet(MAX: number): number[] {
    let numSet = [];
    for (let i = 0; i < MAX; i++) {
      numSet.push(i);
    }
    return numSet;
  }

  getAddition(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.contentId) {
      case 1:
      case 4:
      case 5:
        return this.getAdditionMix(data, ROW, COL);
        break;
      case 2:
        return this.getAdditionNoRegroup(data, ROW, COL);
        break;
      case 3:
        return this.getAdditionRegrouping(data, ROW, COL);
        break;
      case 6:
        return this.getAdditionLong(data, ROW, COL);
        break;
      default:
        return this.getAdditionMix(data, ROW, COL);
        break;
    }
  }

  getAdditionMix(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
      case 2:
      case 3:
        let max = this.MAX;
        return this.getAdditionMixGradeOneToThree(data, ROW, COL, max);
        break;
    }
    return null;
  }

  getAdditionNoRegroup(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
      case 2:
      case 3:
        let max = this.MAX;
        return this.getAdditionNoRegroupingGradeOneToThree(data, ROW, COL, max);
        break;
    }
    return null;
  }

  getAdditionRegrouping(data: Data, ROW: number, COL: number): Question[][] {
    switch (data.gradeId) {
      case 1:
      case 2:
      case 3:
        let max = this.MAX;
        return this.getAdditionRegroupingGradeOneToThree(data, ROW, COL, max);
        break;
    }
    return null;
  }

  getAdditionLong(data: Data, ROW: number, COL: number): Question[][] {
    return null;
  }

  getAdditionMixGradeOneToThree(
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
        ques.operand1 = String(this.rand(Math.pow(MAX, data.gradeId), 0));
        ques.operand2 = String(this.rand(Math.pow(MAX, data.gradeId), 0));
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
        ques.operator = '+';
        ques.correctAnswer = Number(ques.operand1) + Number(ques.operand2);
        ques.answerLocation = this.random(3);
        ques.id = AdditionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getAdditionNoRegroupingGradeOneToThree(
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
        let opt1 = '';
        let opt2 = '';
        for (let k = 0; k < data.gradeId; k++) {
          let temp = this.rand(MAX, 0);
          opt1 = opt1 + temp;
          if (numberSet && numberSet.length > 0) {
            let noRegroup = numberSet.filter((n) => n + temp < MAX);
            let count =
              noRegroup && noRegroup.length > 0 ? noRegroup.length : 0;
            let index = this.random(count);
            opt2 = opt2 + noRegroup[index];
          }
        }
        ques.operand1 = opt1;
        ques.operand2 = opt2;
        ques.operator = '+';
        ques.correctAnswer = Number(ques.operand1) + Number(ques.operand2);
        ques.id = AdditionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getAdditionRegroupingGradeOneToThree(
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
        let opt1 = '';
        let opt2 = '';
        for (let k = 0; k < data.gradeId; k++) {
          let temp = this.rand(MAX, 0);
          opt1 = opt1 + temp;
          if (numberSet && numberSet.length > 0) {
            let regroup = numberSet.filter((n) => n + temp >= MAX);
            let count = regroup && regroup.length > 0 ? regroup.length : 0;
            let index = this.random(count);
            opt2 = opt2 + regroup[index];
          }
        }
        ques.operand1 = opt1;
        ques.operand2 = opt2;
        ques.operator = '+';
        ques.correctAnswer = Number(ques.operand1) + Number(ques.operand2);
        ques.id = AdditionService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  // random in a range
  rand(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // random from 0 to the number
  random(max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
  }
}
