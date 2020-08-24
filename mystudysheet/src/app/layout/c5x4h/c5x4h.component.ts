import { Question } from './../../model/question';
import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-c5x4h',
  templateUrl: './c5x4h.component.html',
  styleUrls: ['./c5x4h.component.css'],
})
export class C5x4hComponent implements OnInit {
  @Input() questions: Question[][];
  @Input() contentType: number;
  check = faCheck;
  cross = faTimes;
  answerLocation: number;
  constructor() {
    this.answerLocation = 2;
  }

  ngOnInit(): void {}

  checkAnswer(question: Question) {
    if (this.contentType === 5) {
      if (question.answerLocation === 0) {
        if (question.answer == question.operand1) {
          question.checkAnswer = true;
        } else {
          question.checkAnswer = false;
        }
      } else if (question.answerLocation === 1) {
        if (question.answer == question.operand2) {
          question.checkAnswer = true;
        } else {
          question.checkAnswer = false;
        }
      } else {
        if (question.answer == String(question.correctAnswer)) {
          question.checkAnswer = true;
        } else {
          question.checkAnswer = false;
        }
      }
    } else {
      if (question.answer == String(question.correctAnswer)) {
        question.checkAnswer = true;
      } else {
        question.checkAnswer = false;
      }
    }
  }
}
