export class Content {
  id: number;
  name: string;
  gradeId: number;
  subjectId: number;
  topicId: number;
  constructor(content?: any) {
    this.gradeId = 0;
    this.subjectId = 0;
    this.topicId = 0;
    if (content) {
      this.id = Number(content.id);
      this.name = content.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
