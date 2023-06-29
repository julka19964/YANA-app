// serwis służący do przekazzywania danych dla całej apliikacji
import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from 'rxjs'
import { NewFriend } from "../model";
import { FriendsList } from "../sample";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class FriendsService {
    friendsList$ = new BehaviorSubject<NewFriend[]>([]);
    likedFriend$ = new BehaviorSubject<number[]>([]);
    disLikedFriend$ = new BehaviorSubject<number[]>([]);

    constructor(
        private http: HttpClient
    ) {

    }
    //ustawienie danych, żeby można było z nich korzystać w innych częściach aplikacji
    setInitFriends(): void {
        this.friendsList$.next(FriendsList);
    }
    // getDetails(id: number): Observable<NewFriend> {
    //     const url = `main-page/${id}`;
    //     return this.http.get<NewFriend>(url);
    //   }
    getDetails(id:number) {
        return this.friendsList$.pipe(
            map((friends:NewFriend[]) => friends.find(friend => friend.id === +id ))
        )
    }
    //wywołanie tych danych jednak w formie app initalizer

}