export class Topic {
  id: number;
  name: string;
  gradeId: number;
  subjectId: number;
  constructor(topic?: any) {
    if (topic) {
      this.id = Number(topic.id);
      this.name = topic.name;
    } else {
      this.id = 0;
      this.name = '';
    }
    this.gradeId = 0;
    this.subjectId = 0;
  }
}
