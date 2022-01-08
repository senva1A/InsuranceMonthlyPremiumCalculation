export default class OccupationDetail {
    occupationId:string;
    occupation : string;
    ratingId : string;

    constructor( occupationId:string, occupation: string, ratingId: string) {
        this.occupationId = occupationId;
        this.occupation = occupation;
        this.ratingId = ratingId;
      }
}

export class RatingFactor {
    ratingId : string;
    rating : string;
    factor : number;

    constructor(ratingId : string, rating: string, factor: number) {
        this.factor = factor;
        this.rating = rating;
        this.ratingId = ratingId;
      }
}

export class OccupationWithRating {
    occupation : string;
    factor : number;

    constructor( occupation: string, factor: number) {
        this.factor = factor;
        this.occupation = occupation;
      }
}