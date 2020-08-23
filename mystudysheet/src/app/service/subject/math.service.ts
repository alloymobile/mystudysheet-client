import { AdditionService } from './../topic/addition.service';
import { Content } from '../../model/content';
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

  getMath(content: Content): Question[][] {
    switch (content.topicId) {
      case 1:
        return this.additionService.getAddition(content, this.ROW, this.COL);
        break;
    }
  }
}
