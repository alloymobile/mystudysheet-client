import { Content } from './content';
export class Topic {
  id: number;
  name: string;
  gradeId: number;
  subjectId: number;
  contentId: number;
  icon: any;
  active: boolean;
  contents: Content[];
  constructor(topic?: any) {
    this.gradeId = 0;
    this.subjectId = 0;
    this.contentId = 0;
    this.icon = '';
    this.active = null;
    if (topic) {
      this.id = Number(topic.id);
      this.name = topic.name;
      if (topic.contents && topic.contents.length > 0) {
        topic.contents.forEach((element) => {
          return this.contents.push(new Content(element));
        });
      }
    } else {
      this.id = 0;
      this.name = '';
      this.contents = [];
    }
  }
}
