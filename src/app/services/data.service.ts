import { Injectable } from '@angular/core';
import OccupationDetail, { OccupationWithRating, RatingFactor } from '../model/occupation-detail.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  ratingFactorList: RatingFactor[] = [];
  occupationList: OccupationDetail[] = [];
  occupationRatingList: OccupationWithRating[] = [];


  constructor() {

    const ratingProf = new RatingFactor('1', 'Professional', 1.0);
    this.ratingFactorList.push(ratingProf);
    const ratingWC = new RatingFactor('2', 'White Collar', 1.25);
    this.ratingFactorList.push(ratingWC);
    const ratingLM = new RatingFactor('3', 'Light Manual', 1.50);
    this.ratingFactorList.push(ratingLM);
    const ratingHM = new RatingFactor('4', 'Heavy Manual', 1.75);
    this.ratingFactorList.push(ratingHM);


    const occupationCleaner = new OccupationDetail('1', 'Cleaner', '3');
    this.occupationList.push(occupationCleaner);
    const occupationDoctor = new OccupationDetail('2', 'Doctor', '1');
    this.occupationList.push(occupationDoctor);
    const occupationAuth = new OccupationDetail('3', 'Author', '2');
    this.occupationList.push(occupationAuth);
    const occupationFarmer = new OccupationDetail('4', 'Farmer', '4');
    this.occupationList.push(occupationFarmer);
    const occupationMech = new OccupationDetail('5', 'Mechanic', '4');
    this.occupationList.push(occupationMech);
    const occupationFlorist = new OccupationDetail('6', 'Florist', '3');
    this.occupationList.push(occupationFlorist);
  }

  getOccupationDetails() {


    if (this.occupationList && this.occupationList.length > 0 && this.ratingFactorList && this.ratingFactorList.length > 0) {

      this.occupationList.forEach((element, index) => {

        let ratingFactors: RatingFactor[];
        ratingFactors = this.ratingFactorList.filter(r => r.ratingId === element.ratingId);
        if (ratingFactors && ratingFactors.length > 0) {
          const occupation = new OccupationWithRating(element.occupation, ratingFactors[0].factor)
          this.occupationRatingList.push(occupation);
        }

      })
    }

    return this.occupationRatingList;

  }
}
