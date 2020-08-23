import { Data } from './../../model/data';
import { AdditionService } from './../topic/addition.service';
import { Question } from '../../model/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  ROW: number;
  COL: number;
  constructor(private additionService: AdditionService) {
    this.ROW = 5;
    this.COL = 4;
  }

  getMath(data: Data): Question[][] {
    switch (data.topicId) {
      case 1:
        return this.additionService.getAddition(data, this.ROW, this.COL);
        break;
    }
  }
}
