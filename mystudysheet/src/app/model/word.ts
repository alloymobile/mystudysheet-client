export class Word {
  noun: Noun;
  constructor(word?: any) {
    if (word) {
      this.noun = new Noun(word.noun);
    } else {
      this.noun = new Noun();
    }
  }
}

class Noun {
  properNouns: ProperNoun[];
  commonNouns: CommonNoun[];
  constructor(noun?: any) {
    if (noun) {
      if (noun.properNouns && noun.properNouns.length > 0) {
        noun.properNouns.array.forEach((element) => {
          this.properNouns.push(new ProperNoun(element));
        });
      }
      if (noun.commonNouns && noun.commonNouns.length > 0) {
        noun.commonsNouns.array.forEach((element) => {
          this.commonNouns.push(new CommonNoun(element));
        });
      }
    } else {
      this.properNouns = [];
      this.commonNouns = [];
    }
  }
}

class ProperNoun {
  id: number;
  name: string;
  pronoun: ProNoun;
  constructor(proper?: any) {
    if (proper) {
      this.id = proper.id;
      this.name = proper.name;
      this.pronoun = new ProNoun(proper.pronoun);
    } else {
      this.id = 0;
      this.name = '';
      this.pronoun = new ProNoun();
    }
  }
}

class CommonNoun {
  id: number;
  name: string;
  verbs: Verb[];
  constructor(common?: any) {
    if (common) {
      this.id = common.id;
      this.name = common.name;
      if (common.verbs && common.verbs.length > 0) {
        common.verbs.forEach((element) => {
          return this.verbs.push(new Verb(element));
        });
      }
    } else {
      this.id = 0;
      this.name = '';
      this.verbs = [];
    }
  }
}

class ProNoun {
  id: number;
  name: string;
  constructor(pronoun?: any) {
    if (pronoun) {
      this.id = pronoun.id;
      this.name = pronoun.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}

class Verb {
  id: number;
  name: string;
  constructor(verb?: any) {
    if (verb) {
      this.id = verb.id;
      this.name = verb.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }
}
