import { Content } from './../model/content';
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

  getMath(content: Content): Question[][] {
    switch (content.gradeId) {
      case 1:
        return this.getGradeOne(content);
        break;
      case 2:
        return this.getGradeTwo(content);
        break;
    }
    return null;
  }

  getGradeOne(content: Content): Question[][] {
    switch (content.topicId) {
      case 1:
        return this.getGradeOneAddition(content);
        break;
      // case 2:
      //   return this.getGradeTwoAddition(content);
      //   break;
      // case 3:
      //   return this.getGradeThreeAddition(content);
      //   break;
    }
  }

  getGradeTwo(content: Content): Question[][] {
    switch (content.topicId) {
      case 1:
        return this.getGradeTwoAddition(content);
        break;
      // case 2:
      //   return this.getGradeTwoAddition(content);
      //   break;
      // case 3:
      //   return this.getGradeThreeAddition(content);
      //   break;
    }
  }

  getGradeOneAddition(content: Content): Question[][] {
    switch (content.id) {
      case 1:
        return this.getGradeOneAdditionMix(content);
        break;
      // case 2:
      //   return this.getGradeTwoAdditionMix(content);
      //   break;
      // case 3:
      //   return this.getGradeThreeAdditionMix(content);
      //   break;
    }
  }

  getGradeTwoAddition(content: Content): Question[][] {
    switch (content.id) {
      case 1:
        return this.getGradeTwoAdditionMix(content);
        break;
      // case 2:
      //   return this.getGradeTwoAdditionMix(content);
      //   break;
      // case 3:
      //   return this.getGradeThreeAdditionMix(content);
      //   break;
    }
  }

  getGradeThreeAddition(content: Content): Question[][] {
    switch (content.id) {
      case 1:
        return this.getGradeThreeAdditionMix(content);
        break;
      // case 2:
      //   return this.getGradeTwoAdditionMix(content);
      //   break;
      // case 3:
      //   return this.getGradeThreeAdditionMix(content);
      //   break;
    }
  }

  getGradeOneAdditionMix(content: Content): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(this.MAX, 0);
        ques.operand2 = this.rand(this.MAX, 0);
        ques.operator = '+';
        ques.correctAnswer = ques.operand1 + ques.operand2;
        ques.id = MathService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getGradeTwoAdditionMix(content: Content): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(this.MAX * this.MAX, 0);
        ques.operand2 = this.rand(this.MAX * this.MAX, 0);
        ques.operator = '+';
        ques.correctAnswer = ques.operand1 + ques.operand2;
        ques.id = MathService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getGradeThreeAdditionMix(content: Content): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for (let j = 0; j < this.COL; j++) {
        ques = new Question();
        ques.operand1 = this.rand(this.MAX * this.MAX * this.MAX, 0);
        ques.operand2 = this.rand(this.MAX * this.MAX * this.MAX, 0);
        ques.operator = '+';
        ques.correctAnswer = ques.operand1 + ques.operand2;
        ques.id = MathService.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getSubtraction(content: Content): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    // for (let i = 0; i < this.ROW; i++) {
    //   question = [];
    //   for (let j = 0; j < this.COL; j++) {
    //     ques = new Question();
    //     let a = this.rand(
    //       Math.pow(this.MAX, gradeId),
    //       Math.pow(this.MAX, gradeId - 1)
    //     );
    //     let b = this.rand(
    //       Math.pow(this.MAX, gradeId),
    //       Math.pow(this.MAX, gradeId - 1)
    //     );
    //     if (a > b) {
    //       ques.operand1 = a;
    //       ques.operand2 = b;
    //     } else {
    //       ques.operand1 = b;
    //       ques.operand2 = a;
    //     }
    //     ques.operator = '-';
    //     ques.correctAnswer = ques.operand1 - ques.operand2;
    //     ques.id = MathService.id++;
    //     question.push(ques);
    //   }
    //   questions.push(question);
    // }
    return questions;
  }

  getMultiplication(content: Content): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    // for (let i = 0; i < this.ROW; i++) {
    //   question = [];
    //   for (let j = 0; j < this.COL; j++) {
    //     ques = new Question();
    //     ques.operand1 = this.rand(
    //       Math.pow(this.MAX, gradeId),
    //       Math.pow(this.MAX, gradeId - 1)
    //     );
    //     ques.operand2 = this.rand(
    //       Math.pow(this.MAX, gradeId),
    //       Math.pow(this.MAX, gradeId - 1)
    //     );
    //     ques.operator = 'x';
    //     ques.correctAnswer = ques.operand1 * ques.operand2;
    //     ques.id = MathService.id++;
    //     question.push(ques);
    //   }
    //   questions.push(question);
    // }
    return questions;
  }

  getDivision(content: Content): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    // for (let i = 0; i < this.ROW; i++) {
    //   question = [];
    //   for (let j = 0; j < this.COL; j++) {
    //     ques = new Question();
    //     ques.operand1 = this.rand(
    //       Math.pow(this.MAX, gradeId),
    //       Math.pow(this.MAX, gradeId - 1)
    //     );
    //     ques.operand2 = this.rand(
    //       Math.pow(this.MAX, gradeId),
    //       Math.pow(this.MAX, gradeId - 1)
    //     );
    //     ques.operator = '/';
    //     ques.correctAnswer = ques.operand1 / ques.operand2;
    //     ques.id = MathService.id++;
    //     question.push(ques);
    //   }
    //   questions.push(question);
    // }
    return questions;
  }

  // using Math.floor
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
