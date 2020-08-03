import { Grade } from "./grade";
export class Subject {
  id: number;
  name: string;
  constructor(subject?: any) {
    if (subject) {
      this.id = Number(subject._embedded.metadata.id);
      this.name = subject.name;
    } else {
      this.id = 0;
      this.name = "";
    }
  }
}
