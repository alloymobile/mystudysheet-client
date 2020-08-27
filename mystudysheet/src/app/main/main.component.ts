import { Data } from './../model/data';
import { MathService } from './../service/subject/math.service';
import { Content } from './../model/content';
import { MyStudySheet } from './../mystudysheet';
import { Question } from './../model/question';
import { GeneratePDFService } from './../service/generate-pdf.service';
import { Topic } from './../model/topic';
import { Component, OnInit, Input } from '@angular/core';
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
  data: Data;
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
    this.data = new Data();
    this.questions = [];
    this.showCheckAnswer = false;
  }

  ngOnInit(): void {}

  selectTopic(gradeId: number, subjectId: number, topic: Topic) {
    if (topic.contents && topic.contents.length > 0) {
      this.content = topic.contents[0];
    }
    this.data.gradeId = gradeId;
    this.data.subjectId = subjectId;
    this.data.topicId = topic.id;
    this.data.contentId = this.content.id;
    this.topic = topic;
    this.topic.active = false;
    this.getQuestion(this.content);
  }

  getQuestion(content: Content) {
    this.data.contentId = content.id;
    this.showCheckAnswer = false;
    this.content = content;
    switch (this.data.subjectId) {
      case 1:
        this.questions = this.mathService.getMath(this.data);
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
          if (this.data.contentId === 5) {
            if (this.questions[i][j].answerLocation === 0) {
              this.questions[i][j].answer = String(
                this.questions[i][j].correctAnswer -
                  Number(this.questions[i][j].operand2)
              );
            } else if (this.questions[i][j].answerLocation === 1) {
              this.questions[i][j].answer = String(
                this.questions[i][j].correctAnswer -
                  Number(this.questions[i][j].operand1)
              );
            } else {
              this.questions[i][j].answer = String(
                this.questions[i][j].correctAnswer
              );
            }
          } else {
            this.questions[i][j].answer = String(
              this.questions[i][j].correctAnswer
            );
          }
          this.questions[i][j].showAnswer = true;
        }
      }
    }
  }

  generatePDF() {
    this.generatePDFService.generatePDF(
      'open',
      this.questions,
      this.content.id
    );
  }
  print() {
    this.content.id = -1;
  }
}
