import { DataService } from './../service/data.service';
import { Topic } from './../model/topic';
import { Question } from './../model/question';
import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";  
import pdfFonts from "pdfmake/build/vfs_fonts";  
pdfMake.vfs = pdfFonts.pdfMake.vfs; 

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css'],
})
export class WorksheetComponent implements OnInit {
  topic: Topic;
  question: Question;
  questions: Question[][];
  MAX: number;
  ROW: number;
  COL: number;
  totalQuestion: number;
  static id: number;

  constructor(private dataService: DataService) {
    this.topic = dataService.topic;
    this.MAX = 10;
    this.ROW = 5;
    this.COL = 4;
    this.question = new Question();
    this.questions = [];
    WorksheetComponent.id = 1;
  }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion() {
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
        this.questions = this.getAddition();
        break;
      case 2:
        this.questions = this.getSubtraction();
        break;
      case 3:
        this.questions = this.getMultiplication();
        break;
    }
  }

  getEnglish() {}

  getScience() {}

  getAddition(): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for(let j = 0; j < this.COL; j++){
        ques = new Question();
        ques.operand1 = this.rand(Math.pow(this.MAX, this.topic.gradeId),Math.pow(this.MAX,this.topic.gradeId -1));
        ques.operand2 = this.rand(Math.pow(this.MAX, this.topic.gradeId),Math.pow(this.MAX,this.topic.gradeId -1));
        ques.operator = '+';
        ques.correctAnswer = ques.operand1 + ques.operand2;
        ques.id = WorksheetComponent.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getSubtraction(): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for(let j = 0; j < this.COL; j++){
        ques = new Question();
        let a = this.rand(Math.pow(this.MAX, this.topic.gradeId),Math.pow(this.MAX,this.topic.gradeId -1));
        let b = this.rand(Math.pow(this.MAX, this.topic.gradeId),Math.pow(this.MAX,this.topic.gradeId -1));
        if( a > b ){
          ques.operand1 = a;
          ques.operand2 = b;
        }else{
          ques.operand1 = b;
          ques.operand2 = a;
        }
        ques.operator = '-';
        ques.correctAnswer = ques.operand1 - ques.operand2;
        ques.id = WorksheetComponent.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  getMultiplication(): Question[][] {
    let ques: Question;
    let question: Question[];
    let questions: Question[][] = [];
    for (let i = 0; i < this.ROW; i++) {
      question = [];
      for(let j = 0; j < this.COL; j++){
        ques = new Question();
        ques.operand1 = this.rand(Math.pow(this.MAX, this.topic.gradeId),Math.pow(this.MAX,this.topic.gradeId -1));
        ques.operand2 = this.rand(Math.pow(this.MAX, this.topic.gradeId),Math.pow(this.MAX,this.topic.gradeId -1));
        ques.operator = 'x';
        ques.correctAnswer = ques.operand1 * ques.operand2;
        ques.id = WorksheetComponent.id++;
        question.push(ques);
      }
      questions.push(question);
    }
    return questions;
  }

  // using Math.floor
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  next(){
    this.getQuestion();
  }

  showAnswer(){
    if(this.questions && this.questions.length > 0){
      for(let i=0;i<this.questions.length;i++){
        for(let j =0; j < this.questions[i].length; j++){
          this.questions[i][j].answer = String(this.questions[i][j].correctAnswer);
        }
      }
    }
  }

  generatePDF() {  
    let docDefinition = {  
      header: 'C#Corner PDF Header',  
      content: ''+this.questions[0][0].operand1 
    };   
    pdfMake.createPdf(docDefinition).open();          
  }

}
