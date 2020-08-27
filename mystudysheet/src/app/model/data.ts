import { Question } from './question';
export class Data {
  gradeId: number;
  subjectId: number;
  topicId: number;
  contentId: number;
  constructor(data?: any) {
    if (data) {
      this.gradeId = data.gradeId;
      this.subjectId = data.subjectId;
      this.topicId = data.topicId;
      this.contentId = data.contentId;
    } else {
      this.gradeId = 0;
      this.subjectId = 0;
      this.topicId = 0;
      this.contentId = 0;
    }
  }
}
