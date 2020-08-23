export class Content {
  id: number;
  name: string;
  constructor(content?: any) {
    if (content) {
      this.id = Number(content.id);
      this.name = content.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
