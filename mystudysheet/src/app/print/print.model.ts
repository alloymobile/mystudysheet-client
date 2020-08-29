import { Content } from '../model/content';
import { Topic } from '../model/topic';
import { Subject } from '../model/subject';
import { Grade } from '../model/grade';
export class Print {
  grades: Grade[];
  subjects: Subject[];
  topics: Topic[];
  contents: Content[];
  price: number;
  noOfSheet: number;
  totalCost: string;
  constructor(print?: any) {
    if (print) {
      this.grades = print.grades;
      this.subjects = print.subjects;
      this.topics = print.topics;
      this.contents = print.contents;
      this.price = 0.1;
      this.noOfSheet = 1;
      this.totalCost = String((this.price * this.noOfSheet).toFixed(2));
    } else {
      this.grades = [];
      this.subjects = [];
      this.topics = [];
      this.contents = [];
      this.price = 0.1;
      this.noOfSheet = 0;
      this.totalCost = '';
    }
  }
}
