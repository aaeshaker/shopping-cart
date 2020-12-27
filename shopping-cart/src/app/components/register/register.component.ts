import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// Custom Validators

/**
 * @param form
**/
function passwordsMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if(password.value !== confirmPassword.value)
  {
    confirmPassword.setErrors({ passwordsMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }
  return null;
}


/**
 * If the data is valid return null else return an object
**/
//control = registerForm.get('password');
function symbolValidator(control) {
  if (control.hasError('required'))
    return null;
  if (control.hasError('minlength'))
    return null;
  //means when the required error and minlength errors are gone, the symbol will be checked
  if (control.value.indexOf('@') > -1) //means if '@' is found 
  {
    return null;
  } else {
    return { symbol: true }; //means symbol error is here
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // name: FormControl;
  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    //FormControl
    // this.name = new FormControl('John Doe');

    //FormGroup accepts object
    // this.registerForm = new FormGroup({
    //   name: new FormControl('John Doe'),
    //   email: new FormControl('john@gmail.com'),
    //   username: new FormControl('john.d'),
    //   password: new FormControl('abcd1234'),
    //   confirmPassword: new FormControl('abcd1234')
    // })

    //FormBuilder
    //not to write too much code in the ngOnInit() we just call the function here
    this.buildForm();
  }

  buildForm() {
    //FormBuilder
    //group method accepts object
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], //this means the email is required and must be valid
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator //to apply this custom validator to the entire form
    });
    //here you should not use FormControl
  }

  register() {
    // console.log(this.name);
    console.log(this.registerForm.value);
  }

}
