import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import OccupationDetail, { OccupationWithRating, RatingFactor } from '../model/occupation-detail.model';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-premium-calc',
  templateUrl: './premium-calc.component.html',
  styleUrls: ['./premium-calc.component.css']
})
export class PremiumCalcComponent implements OnInit {
  form: any;
  submitted = false;
  occupationWithRating: OccupationWithRating[] = [];
  maxDate: any;
  showAge: string = '';
  dobValue: string = '';
  sumValue: string = '';
  occupationRating: any;
  monthlyPremium: any;
  numberRegEx = /^[0-9]+(\.?[0-9]+)?$/;
  stringRegex = /^[a-zA-Z\s]*$/;

  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(this.stringRegex)]),
      age: new FormControl({ value: '', disabled: true }),
      dob: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      sum: new FormControl('', [Validators.required, Validators.pattern(this.numberRegEx)]),
    });
    this.occupationWithRating = this.dataService.getOccupationDetails();
    this.maxDate = this.futureDateDisabele();
    this.monthlyPremium = '$0.00';
  }

  futureDateDisabele(): any {
    var date = new Date();
    var todaydate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();

    if (todaydate < 10) {
      todaydate = '0' + todaydate;
    }

    if (month < 10) {
      month = '0' + month;
    }
    var maximumDate = year + '-' + month + '-' + todaydate;
    return maximumDate;
  }

  ageCalculator(dateVal: any) {
    const convertAge = new Date(dateVal);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = (Math.floor((timeDiff / (1000 * 3600 * 24)) / 365)).toString();
  }

  changeOccupation(e: any) {
    this.occupationRating = Number(e.target.value);
    this.CalculateMonthlyPremium();
  }

  changeDate(e: any) {
    if (e && e.target && e.target.value) {
      this.ageCalculator(e.target.value);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.CalculateMonthlyPremium();
  }

  CalculateMonthlyPremium() {
    if (this.form.invalid) {
      this.monthlyPremium = '$0.00';
      return;
    }
    else {
      const sumInsured = Number(this.form.value.sum);
      this.MonthlyPremium(sumInsured, this.occupationRating, Number(this.showAge));
    }
  }

  MonthlyPremium(sum: number, occupationrat: number, showAge: number) {
    const deathPremium = ((sum * occupationrat * showAge) / 12000).toString();
    this.monthlyPremium = this.currencyPipe.transform(deathPremium.toString(), 'AUD', 'symbol-narrow', '.2-2')?.toString();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
