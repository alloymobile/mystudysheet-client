import { MyStudySheet } from './../mystudysheet';
import { Question } from './../model/question';
import { MathService } from './../service/math.service';
import { GeneratePDFService } from './../service/generate-pdf.service';
import { Topic } from './../model/topic';
import { Component, OnInit } from '@angular/core';
import {
  faCaretDown,
  faCaretUp,
  faGraduationCap,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent extends MyStudySheet implements OnInit {
  topic: Topic;
  questions: Question[][];
  //To change toggel arrow
  downToggle = faCaretDown;
  upToggle = faCaretUp;
  grade = faGraduationCap;
  check = faCheck;
  cross = faTimes;
  showCheckAnswer: boolean;

  constructor(
    private generatePDFService: GeneratePDFService,
    private mathService: MathService
  ) {
    super();
    this.topic = new Topic();
    this.questions = [];
    this.showCheckAnswer = false;
  }

  ngOnInit(): void {}

  selectTopic(gradeId: number, subjectId: number, topic: Topic) {
    this.topic = topic;
    this.topic.gradeId = gradeId;
    this.topic.subjectId = subjectId;
    this.getQuestion();
  }

  getQuestion() {
    this.showCheckAnswer = false;
    switch (this.topic.gradeId) {
      case 1:
        this.getOne();
        break;
      case 2:
        this.getTwo();
        break;
      case 3:
        this.getThree();
        break;
    }
  }

  getOne() {
    switch (this.topic.subjectId) {
      case 1:
        this.getMath();
        break;
      case 2:
        this.getEnglish();
        break;
      case 3:
        this.getScience();
        break;
    }
  }

  getTwo() {
    switch (this.topic.subjectId) {
      case 1:
        this.getMath();
        break;
      case 2:
        this.getEnglish();
        break;
      case 3:
        this.getScience();
        break;
    }
  }

  getThree() {
    switch (this.topic.subjectId) {
      case 1:
        this.getMath();
        break;
      case 2:
        this.getEnglish();
        break;
      case 3:
        this.getScience();
        break;
    }
  }

  getMath() {
    switch (this.topic.id) {
      case 1:
        this.questions = this.mathService.getAddition(this.topic.gradeId);
        break;
      case 2:
        this.questions = this.mathService.getSubtraction(this.topic.gradeId);
        break;
      case 3:
        this.questions = this.mathService.getMultiplication(this.topic.gradeId);
        break;
      case 4:
        this.questions = this.mathService.getDivision(this.topic.gradeId);
        break;
    }
  }

  getEnglish() {}

  getScience() {}

  next() {
    this.getQuestion();
  }

  showAnswer() {
    if (this.questions && this.questions.length > 0) {
      for (let i = 0; i < this.questions.length; i++) {
        for (let j = 0; j < this.questions[i].length; j++) {
          this.questions[i][j].answer = String(
            this.questions[i][j].correctAnswer
          );
          this.questions[i][j].showAnswer = true;
        }
      }
    }
  }

  checkAnswer() {
    if (this.questions && this.questions.length > 0) {
      this.questions.forEach((ques) => {
        ques.forEach((q) => {
          if (q.correctAnswer == Number(q.answer)) {
            q.checkAnswer = true;
          }
        });
      });
      this.showCheckAnswer = true;
    }
  }

  generatePDF() {
    this.generatePDFService.generatePDF('open', this.questions);
  }
}
