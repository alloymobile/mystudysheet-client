import { MathService } from './../service/subject/math.service';
import { Content } from './../model/content';
import { MyStudySheet } from './../mystudysheet';
import { Question } from './../model/question';
import { GeneratePDFService } from './../service/generate-pdf.service';
import { Topic } from './../model/topic';
import { Component, OnInit } from '@angular/core';
import {
  faCaretDown,
  faCaretUp,
  faGraduationCap,
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
  showCheckAnswer: boolean;

  constructor(
    private generatePDFService: GeneratePDFService,
    private mathService: MathService
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
    this.getQuestion(this.content);
  }

  getQuestion(content: Content) {
    this.content = content;
    this.showCheckAnswer = false;
    switch (this.content.subjectId) {
      case 1:
        this.questions = this.mathService.getMath(this.content);
        break;
    }
  }

  next() {
    this.getQuestion(this.content);
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

  generatePDF() {
    this.generatePDFService.generatePDF('open', this.questions);
  }
}
