import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PremiumCalcComponent } from './premium-calc.component';


describe('PremiumCalcComponent', () => {
  let component: PremiumCalcComponent;
  let fixture: ComponentFixture<PremiumCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumCalcComponent ],
      imports:[ReactiveFormsModule],
      providers : [CurrencyPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check name is required', () => {
    let name = component.form.controls['name'];
    expect(name.valid).toBeFalsy();
    expect(name.errors['required']).toBeTruthy();
    name.setValue('sumaiya');
    expect(name.valid).toBeTruthy();
  });

  it('should name allow only alphabets', () => {
    let name = component.form.controls['name'];
    name.setValue('234sumaiya');
    expect(name.valid).toBeFalsy();
    name.setValue('sumaiya');
    expect(name.valid).toBeTruthy();
  });

  it('should calculate age with the given date', () => {
    let dob = component.form.controls['dob'];
    component.showAge='';
    component.ageCalculator('05-20-1990');
    expect(component.showAge).toBe('31');
  });

  it('should check date of birth is required', () => {
    let dob = component.form.controls['dob'];
    expect(dob.valid).toBeFalsy();
    expect(dob.errors['required']).toBeTruthy();
    dob.setValue('05-20-1990');
    expect(dob.valid).toBeTruthy();
  });

  it('should check occupation is required', () => {
    let occupation = component.form.controls['occupation'];
    expect(occupation.valid).toBeFalsy();
    expect(occupation.errors['required']).toBeTruthy();
    occupation.setValue('Cleaner');
    expect(occupation.valid).toBeTruthy();
  });

  it('should check sum insured is required', () => {
    let sum = component.form.controls['sum'];
    expect(sum.valid).toBeFalsy();
    expect(sum.errors['required']).toBeTruthy();
    sum.setValue(2000);
    expect(sum.valid).toBeTruthy();
  });

  it('should check sum insured not allow negative', () => {
    let sum = component.form.controls['sum'];
    sum.setValue(-2000);
    expect(sum.valid).toBeFalsy();
  });

  it('should check sum insured not allow alphabets', () => {
    let sum = component.form.controls['sum'];
    sum.setValue('sumaiya');
    expect(sum.valid).toBeFalsy();
  });

  it('should check sum insured allow numbers', () => {
    let sum = component.form.controls['sum'];
    sum.setValue(2000);
    expect(sum.valid).toBeTruthy();
  });

  it('[Form-Check] - should check form is valid or not if no values are entered', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('[Form-Check] - should check form is valid or not when values are entered', () => {
    component.form.controls['name'].setValue('sumaiya');
    component.form.controls['dob'].setValue('05-20-1990');
    component.form.controls['occupation'].setValue('Cleaner');;
    component.form.controls['sum'].setValue('2000.34');
    expect(component.form.valid).toBeTruthy();
  });

  it('should check monthly premium calculation is correct or not', () => {
    component.MonthlyPremium(2000.34, 1.75, 31);
    expect(component.monthlyPremium).toBe('$9.04');
  });

});
