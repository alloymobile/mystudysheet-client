import { Question } from './../../model/question';
import { DivisionService } from '../topic/math/division.service';
import { MultiplicationService } from '../topic/math/multiplication.service';
import { SubtractionService } from './../topic/math/subtraction.service';
import { Data } from './../../model/data';
import { AdditionService } from '../topic/math/addition.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  ROW: number;
  COL: number;
  constructor(
    private additionService: AdditionService,
    private subtractionService: SubtractionService,
    private multiplicationService: MultiplicationService,
    private divisionService: DivisionService
  ) {
    this.ROW = 5;
    this.COL = 4;
  }

  getMath(data: Data): Question[][] {
    switch (data.topicId) {
      case 1:
        return this.additionService.getAddition(data, this.ROW, this.COL);
        break;
      case 2:
        return this.subtractionService.getSubtraction(data, this.ROW, this.COL);
        break;
      case 3:
        return this.multiplicationService.getMultiplication(
          data,
          this.ROW,
          this.COL
        );
        break;
      case 4:
        return this.divisionService.getDivision(data, this.ROW, this.COL);
        break;
      case 5:
        let questions: Question[][] = [];
        switch (data.gradeId) {
          case 1:
            let ques1 = this.additionService.getAddition(data, 3, this.COL);
            if (ques1 && ques1.length > 0) {
              ques1.forEach((q) => questions.push(q));
            }
            let ques2 = this.subtractionService.getSubtraction(
              data,
              2,
              this.COL
            );
            if (ques2 && ques2.length > 0) {
              ques2.forEach((q) => questions.push(q));
            }
            return questions;
            break;
        }
        break;
    }
  }
}
