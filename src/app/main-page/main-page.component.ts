import { Component, OnInit } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NewFriend } from '../model';
import { FriendsService } from '../services/friends.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FriendsList } from '../sample';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  form: FormGroup;
  friendsList$: Observable<NewFriend[]>;


  // swipeState: string;
  // public index = 0;
  // parentSubject: Subject<NewFriend> = new Subject();
  // @Input()
  // parentSubject: Subject<any>;
// friends: NewFriend[] = [];

 constructor(
  private fb: FormBuilder,
  private activatedroute:ActivatedRoute,
  public friendsSerive: FriendsService,
  private sanitizer:DomSanitizer,
  private router:Router
  ) { }

 ngOnInit() : void {
  // this.getDetails();

  this.form = this.fb.group ({
    age : [],
    gender : [],
    name: [],
    city: [],
    favQuote: [],
    favSong: [],
    favBook: [],
    id: []
 })

this.activatedroute.params.subscribe(({age, gender}) => {
  this.friendsList$ = this.friendsSerive.friendsList$.pipe(map((friends) => friends.filter((friend) => friend.age <= age  && friend.gender === gender)))
})

 }

 likeProfile():void {
  console.log('wtiam');
  const idLike = this.friendsSerive.likedFriend$.value;
  console.log(idLike.push(this.form.value.id));

 }
 dislikeProfile():void {
  console.log('wtiam');
  const idLike = this.friendsSerive.disLikedFriend$.value;
 }
 

// cardAnimation(value) {
//   this.parentSubject.next(value);
// }


//  getDetails(): void {
//   this.friendsSerive.getDetails(this.id)
//   .subscribe(friends => this.friends = friends)
//  }
 
 
 
 // this.sub = this.activatedroute.params.subscribe(params => {
//   this.id = +params['id'];
// })
// this.friendsList$.subscribe(friendId => this.id = friendId);

public getSanitizeURL(url:string){
  return this.sanitizer.bypassSecurityTrustUrl(url);
}

// public navigateToDetails(id: number): void {
//   this.router.navigateByUrl(`/main-page/details/${id}`);
// }

// seeDetails(form:any) {
//   const { name, age, city, url, favBook, favQuote, favSong } = form.value;
// console.log(age, favBook);

  // this.router.navigate(['main-page/details', { name, age, city, url, favBook, favQuote, favSong }])
}

