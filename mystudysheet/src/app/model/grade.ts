import { Subject } from './subject';
export class Grade {
  id: number;
  name: string;
  subjects: Subject[];
  icon: any;
  active: boolean;
  constructor(grade?: any) {
    this.subjects = [];
    this.icon = '';
    this.active = true;
    if (grade) {
      this.id = Number(grade.id);
      this.name = grade.name;
      if (grade.subjects && grade.subjects.length) {
        grade.subjects.forEach((element) => {
          this.subjects.push(element);
        });
      }
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
