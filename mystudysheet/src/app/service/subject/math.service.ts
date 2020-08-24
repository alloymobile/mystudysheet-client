import { SubtractionService } from './../topic/math/subtraction.service';
import { Data } from './../../model/data';
import { AdditionService } from '../topic/math/addition.service';
import { Question } from '../../model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  ROW: number;
  COL: number;
  constructor(
    private additionService: AdditionService,
    private subtractionService: SubtractionService
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
    }
  }
}
