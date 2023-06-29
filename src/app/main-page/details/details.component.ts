import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NewFriend } from 'src/app/model';
import { MainPageService } from '../main-page.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject  } from 'rxjs';
import { switchMap  } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  form: FormGroup;
  // friend: Observable<any>;
  friend$: Observable<NewFriend>;
  // public index = 0;
  // @Input()
  // parentSubject: Subject<any>;

  

constructor (
  private fb: FormBuilder,
  private activatedroute:ActivatedRoute,
  private sanitizer:DomSanitizer,
  public friendsSerive: FriendsService
) {}

ngOnInit(): void {
  this.form = this.fb.group ({
    age : [],
    gender : [],
    name: [],
    city: [],
    favQuote: [],
    favSong: [],
    favBook: [],
    id: []
 });
//  this.getDetails();
this.friend$ = this.activatedroute.params.pipe(
  switchMap((params) => this.friendsSerive.getDetails(+params?.['id']) ))

  // this.parentSubject.subscribe(event => {
  //   this.startSwipe(event)
  // })
  //  }
  //  startSwipe(state) {
  //   if (!this.swipeState) {
  //     this.swipeState = state;
  //   }
  //  }
  //  resetSwipeState(state) {
  //   this.swipeState = '';
  //   this.index++;
  // }

//  const friendId = this.route.snapshot.paramMap.get('id');
//  this.friend$ = this.friendsSerive.setInitFriends(friendId);
//  this.activatedroute.params.subscribe( params => {
//       const id = parseInt(params['id']);
//     })
}

// getDetails(): void {
//   this.friend = this.activatedroute.params.pipe(
//     switchMap(({ id }) => this.friendsSerive.friendsList$.pipe(map((friends) => friends.filter((friend) => friend.id === +id))
//   )));
// }

public getSanitizeURL(url:string){
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
