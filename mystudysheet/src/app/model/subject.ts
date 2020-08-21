import { Topic } from './topic';
export class Subject {
  id: number;
  name: string;
  topics: Topic[];
  icon: any;
  active: boolean;
  constructor(subject?: any) {
    this.topics = [];
    this.icon = '';
    this.active = true;
    if (subject) {
      this.id = Number(subject.id);
      this.name = subject.name;
      if (subject.topics && subject.topics.length > 0) {
        subject.topics.forEach((element) => {
          return this.topics.push(new Topic(element));
        });
      }
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
