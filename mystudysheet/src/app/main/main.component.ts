import { Content } from './../model/content';
import { Subject } from './../model/subject';
import { Grade } from './../model/grade';
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
  gradeId: number;
  subjectId: number;
  topicId: number;
  contentId: number;
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
    this.gradeId = 0;
    this.subjectId = 0;
    this.topicId = 0;
    this.contentId = 0;
    this.showCheckAnswer = false;
  }

  ngOnInit(): void {}

  selectTopic(grade: Grade, subject: Subject, topic: Topic) {
    this.topic = topic;
    this.topic.gradeId = grade.id;
    this.topic.subjectId = subject.id;
    this.topic.active = false;
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
    this.getSubject(this.topic.subjectId);
  }

  getTwo() {
    this.getSubject(this.topic.subjectId);
  }

  getThree() {
    this.getSubject(this.topic.subjectId);
  }

  getSubject(id: number) {
    switch (id) {
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

  getContent(content: Content, topic: Topic) {}

  checkAnswer(question: Question) {
    if (question.answer == String(question.correctAnswer)) {
      question.checkAnswer = true;
    } else {
      question.checkAnswer = false;
    }
  }

  generatePDF() {
    this.generatePDFService.generatePDF('open', this.questions);
  }
}
