export class Grade {
  id: number;
  name: string;
  constructor(grade?: any) {
    if (grade) {
      this.id = Number(grade._embedded.metadata.id);
      this.name = grade.name;
    } else {
      this.id = 0;
      this.name = "";
    }
  }
}
