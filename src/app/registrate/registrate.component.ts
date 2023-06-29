import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})

export class RegistrateComponent implements OnInit {
  form: FormGroup = new FormGroup ( { } );

  constructor (private fb: FormBuilder,
    private router: Router
  ) { }  
  ngOnInit() : void {
    this.form = this.fb.group ({
      firstName: [null, [Validators.required, Validators.maxLength(15)]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$")]]
    })
  }
  register(form: any) {
    const { firstName, lastName, email } = form.value;
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    this.router.navigate(['/my-profile', { firstName, lastName, email }]);
  }
}


