import { ScienceService } from './../service/science.service';
import { EnglishService } from './../service/english.service';
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
  content: Content;
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
    private mathService: MathService,
    private englishService: EnglishService,
    private scienceService: ScienceService
  ) {
    super();
    this.topic = new Topic();
    this.content = new Content();
    this.questions = [];
    this.showCheckAnswer = false;
  }

  ngOnInit(): void {}

  selectTopic(gradeId: number, subjectId: number, topic: Topic) {
    if (topic.contents && topic.contents.length > 0) {
      this.content = topic.contents[0];
    }
    this.content.gradeId = gradeId;
    this.content.subjectId = subjectId;
    this.content.topicId = topic.id;
    this.topic = topic;
    this.topic.active = false;
    this.getQuestion();
  }

  getQuestion() {
    this.showCheckAnswer = false;
    switch (this.content.subjectId) {
      case 1:
        this.questions = this.mathService.getMath(this.content);
        break;
      // case 2:
      //   this.questions = this.englishService.getEnglish(this.content);
      //   break;
      // case 3:
      //   this.questions = this.scienceService.getScience(this.content);
      //   break;
    }
  }

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
