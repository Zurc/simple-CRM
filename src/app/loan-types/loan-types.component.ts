import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {
  addLoanTypesForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.addLoanTypesForm = new FormGroup({
    //   'loanName' : new FormControl(),
    //   'loanType' : new FormControl(),
    // })

    // One way to set values on Reactive Forms at form creation
    // this.addLoanTypesForm = this.fb.group({
    //   'loanName': new FormControl('Cocos Loan'),
    //   'loanType': new FormControl('Personal Loan'),
    //   'loanDescription': new FormControl('This is for description'),
    // })

    const newLoanObj = {
      'loanName': 'Cocos Loan',
      'loanType': 'Personal Loan',
      // 'loanDescription': 'This is for description',      
    }

    this.addLoanTypesForm = this.fb.group({
      'loanName': new FormControl(),
      'loanType': new FormControl(),
      'loanDescription': new FormControl(),
    })

    // Another way of setting values
    // this.addLoanTypesForm.setValue(newLoanObj);

    /**
     * encourage you to use setValue method
     * 
     * but 
     *    -> The setValue requires data/values for ALL the fields/keys
     *    -> If not you'll see errors
     */

    // A third way of setting values
    this.addLoanTypesForm.patchValue(newLoanObj);

    /**
     * Patch Values
     * 
     * you don't need to pass all values
     * 
     * only selected keys/fields data can be set
     */
  }

  addLoanType() {
    /**
     * Different ways to get data from reactive forms
     * 
     * -Get entire form in one go
     *    this.addLoanTypesForm.value
     * 
     * -Get a specific form control
     *    this.addLoanTypesForm.get('loanType').value
     * 
     * -valueChanges (Observable)
     *    -> subscribe
     */

    console.log(this.addLoanTypesForm.value);    
  }

}
