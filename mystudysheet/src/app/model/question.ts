export class Question {
  id: number;
  name: string;
  answer: string;
  operand1: number;
  operand2: number;
  operator: string;
  correctAnswer: number;
  showAnswer: boolean;
  checkAnswer: boolean;
  constructor(question?: any) {
    this.answer = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
    this.correctAnswer = 0;
    this.showAnswer = false;
    this.checkAnswer = null;
    if (question) {
      this.id = Number(question.id);
      this.name = question.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
