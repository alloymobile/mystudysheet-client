export class Content {
  id: number;
  name: string;
  constructor(topic?: any) {
    if (topic) {
      this.id = Number(topic.id);
      this.name = topic.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
