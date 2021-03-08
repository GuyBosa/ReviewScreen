import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Review';

  productForm: FormGroup;

constructor(
 private formBuilder: FormBuilder,
 private toastr: ToastrService,
 private spinner: NgxSpinnerService
) { 
  this.productForm = this.formBuilder.group({
    reviews: this.formBuilder.array([]) ,
  });
}
ngOnInit() {
  // this.productForm = this.formBuilder.group({
  //   qty: ['', [Validators.required, Validators.maxLength(40)]]
  // });

 /** spinner starts on init */
 this.spinner.show();
 
 setTimeout(() => {
   /** spinner ends after 3 seconds */
   this.spinner.hide();
 }, 3000);
}

reviews() : FormArray {
  return this.productForm.get("reviews") as FormArray
}
 
newQuantity(): FormGroup {
  return this.formBuilder.group({
    review: ["", [Validators.max(5), Validators.min(0)]] ,
  })
}
 
addQuantity() {
  this.reviews().push(this.newQuantity());
}
 
removeQuantity(i:number) {
  this.reviews().removeAt(i);
}
 
onSubmit() {
  console.log(this.productForm.value);
}

}
