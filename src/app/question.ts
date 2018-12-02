export class Question {
  constructor(
    public id: number,
    public description: string,
    public answer: number) { }
}

export class Score {
  constructor(
    public userName: string,
    public score: number
    ,
    public time: number) { }
}

