import { NgModule, Component, Pipe, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "model-form",
  template: `<!--suppress ALL -->
  <div class="container">
<form novalidate
      [formGroup]="myform"
      (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label>City</label>
      <input type="text"
             class="form-control"
             formControlName="City">
    </div>

    <div class="form-group">
      <label>panNumber</label>
      <input type="text"
             class="form-control"
             formControlName="panNumber">
    </div>
  


  <div class="form-group" >
    <label>FullName</label>
    <input type="FullName"
           class="form-control"
           formControlName="FullName">
           </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
</div>
`
})
class ModelFormComponent implements OnInit {
  myform: FormGroup;
  City: FormControl;
  panNumber: FormControl;
  FullName: FormControl;
  email: FormControl;
  Mobile: FormControl;

  createFormControls() {
    this.City = new FormControl("", Validators.required);
    this.panNumber= new FormControl("", Validators.required);
    this.FullName= new FormControl("", Validators.required,);
    this.email= new FormControl("", [Validators.required,);
      Validators.minLength(255)
    this.Mobile = new FormControl("", Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        City: this.City,
        panNumber: this.panNumber
    
      FullName: this.FullName,
      email: this.email,
      Mobile: this.Mobile
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.myform.reset();
    }
  }
}

@Component({
  selector: "app",
  template: `<model-form></model-form>`
})
class AppComponent {}

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, ModelFormComponent],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
onCountryChange(event)
{
  alert(event)
}