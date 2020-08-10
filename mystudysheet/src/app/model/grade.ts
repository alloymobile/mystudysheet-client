import { Subject } from './subject';
export class Grade {
  id: number;
  name: string;
  subjects: Subject[];
  constructor(grade?: any) {
    if (grade) {
      this.id = Number(grade.id);
      this.name = grade.name;
      this.subjects = [];
      if (grade.subjects && grade.subjects.length) {
        grade.Subjects.array.forEach((element) => {
          this.subjects.push(element);
        });
      }
    } else {
      this.id = 0;
      this.name = '';
      this.subjects = [];
    }
  }
}
