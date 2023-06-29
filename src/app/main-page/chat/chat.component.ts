import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NewFriend } from 'src/app/model';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  form: FormGroup;
  // friend: Observable<any>;
  friend$: Observable<NewFriend>;

  constructor (
    private fb: FormBuilder,
    private activatedroute:ActivatedRoute,
    public friendsSerive: FriendsService,
    private sanitizer:DomSanitizer
  ) {
  }

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
  }

  public getSanitizeURL(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
