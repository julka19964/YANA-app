import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { MyProfileService } from './my-profile.service';
import { Character } from '../my-profile/model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})



export class MyProfileComponent implements OnInit {

  form: FormGroup;
  userImage$: Observable<Character>;

  constructor (private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private myprofileservice: MyProfileService,
    private router:Router
    ) {
    
  }

  ngOnInit() : void {
    
    this.form = this.fb.group ({
      firstName : [],
      lastName : [],
      gender : [],
      email : [],
      age: [],
      city: [],
      favQuote: [],
      favSong: [],
      favBook: [],
      id: []
    })
    this.activatedroute.params.subscribe(({ firstName, lastName, email }) =>  this.form.patchValue({firstName, lastName, email}));
 
    this.userImage$ = this.myprofileservice.getRandomImage();
 
 
  }

  formatLabel(value: number): string {
    if (value >= 1) {
      return value + ' y.o.';
    }
    return `${value}`;
  }

choose(form:any) {
  const { age, gender } = form.value;
console.log(age, gender);

  this.router.navigate(['/my-profile/main-page', { age, gender }])
}

}
