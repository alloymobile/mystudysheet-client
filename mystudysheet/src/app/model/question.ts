export class Question {
  id: number;
  name: string;
  answer: number;
  operand1: number;
  operand2: number;
  operator: string;
  correctAnswer: number;
  constructor(question?: any) {
    this.answer = 0;
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
    this.correctAnswer = 0;
    if (question) {
      this.id = Number(question.id);
      this.name = question.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
