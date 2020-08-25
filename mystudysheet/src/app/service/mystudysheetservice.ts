export class MyStudySheetService {
  // random in a range
  rand(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // random from 0 to the number
  random(max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
  }
}
