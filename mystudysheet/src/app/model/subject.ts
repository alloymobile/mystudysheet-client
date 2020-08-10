import { Topic } from './topic';
export class Subject {
  id: number;
  name: string;
  topics; Topic[];
  constructor(subject?: any) {
    if (subject) {
      this.id = Number(subject.id);
      this.name = subject.name;
      this.topics = [];
      if(subject.topics && subject.topics.length > 0){
        subject.topics.forEach(element => {
            return this.topics.push(new Topic(element));
         });
      }
    } else {
      this.id = 0;
      this.name = '';
      this.topics = [];
    }
  }
}
