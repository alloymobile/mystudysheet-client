export class Topic {
  id: number;
  name: string;
  gradeId: number;
  subjectId: number;
  icon: any;
  constructor(topic?: any) {
    this.gradeId = 0;
    this.subjectId = 0;
    this.icon = '';
    if (topic) {
      this.id = Number(topic.id);
      this.name = topic.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
