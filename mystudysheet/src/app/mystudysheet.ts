import { Topic } from './model/topic';
import { Grade } from './model/grade';
import { Subject } from './model/subject';
import grades from '../assets/mystudysheet.json';
import {
  faGraduationCap,
  faCalculator,
  faAtom,
  faSortAlphaDown,
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';

export class MyStudySheet {
  grades: Grade[];
  constructor() {
    this.grades = [];
    if (grades && grades.length) {
      grades.forEach((g) => {
        let grade = new Grade(g);
        this.grades.push(grade);
      });
    }
    this.addFontAwasomIcons();
  }

  addFontAwasomIcons() {
    if (this.grades && this.grades.length > 0) {
      this.grades.forEach((g) => {
        if (g.subjects && g.subjects.length > 0) {
          g.subjects.forEach((s) => {
            this.addIconToSubject(s);
            if (s.topics && s.topics.length > 0) {
              s.topics.forEach((t) => {
                this.addIconToTopic(t);
              });
            }
          });
        }
      });
    }
  }

  addIconToSubject(s: Subject) {
    switch (s.id) {
      case 1:
        s.icon = faCalculator;
        break;
      case 2:
        s.icon = faSortAlphaDown;
        break;
      case 3:
        s.icon = faAtom;
        break;
      default:
        s.icon = faGraduationCap;
        break;
    }
  }

  addIconToTopic(t: Topic) {
    switch (t.id) {
      case 1:
        t.icon = faPlus;
        break;
      case 2:
        t.icon = faMinus;
        break;
      case 3:
        t.icon = faTimes;
        break;
      case 4:
        t.icon = faDivide;
        break;
      default:
        t.icon = faGraduationCap;
        break;
    }
  }
}
