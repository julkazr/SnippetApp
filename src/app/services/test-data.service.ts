import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { DataTest } from '../models/snippet.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  data: DataTest;
  userId: string;
  author: string;
  constructor(private _db: AngularFireDatabase,
              private _afAuth: AngularFireAuth) {
    // subscribe na firebase.User
    this._afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.author = user.displayName;
        console.log(this.userId);
      }
    });
  }

  getSnippets(): AngularFireList<DataTest> {
    return this._db.list('data', ref => ref.orderByChild('date'));
  }

  getSnippet(uid: string): Observable<DataTest> {
    return this._db.object<DataTest>(`data/${uid}`)
      .valueChanges();
  }

  getUserSnippets(userUID: string): Observable<DataTest[]> {
    return this._db.list('data', ref => ref.orderByChild('userId').equalTo(userUID))
                    .valueChanges()
                    .pipe(
                      map((events: DataTest[]) =>
                        events.map((event: DataTest) => new DataTest().deserialize(event))
                      )
                    );
  }

  getPublicSnippets(publicSnippet: string): Observable<DataTest[]> {
    return this._db.list('data', ref => ref.orderByChild('isPrivate').equalTo(publicSnippet))
                    .valueChanges()
                    .pipe(
                      map((events: DataTest[]) =>
                        events.map((event: DataTest) => new DataTest().deserialize(event))
                      )
                    );
  }

  createSnippet(newSnippet: DataTest): void {
    newSnippet.uid = uuid();
    newSnippet.author = this.author;
    newSnippet.date = new Date().toLocaleString();
    newSnippet.userId = this.userId;
    this._db.object('data/' + newSnippet.uid).set(newSnippet);
  }

  updateSnippet(data: DataTest): Promise<void> {
    const dataRef = this._db.object<DataTest>(`data/${data.uid}`);
    return dataRef.update(data);
  }
}
