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
  check = faCheck;
  cross = faTimes;
  constructor() {}

  ngOnInit(): void {}

  checkAnswer(question: Question) {
    if (question.answer == String(question.correctAnswer)) {
      question.checkAnswer = true;
    } else {
      question.checkAnswer = false;
    }
  }
}
