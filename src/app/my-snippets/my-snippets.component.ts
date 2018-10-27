import { Component, OnInit } from '@angular/core';
import { DataTest } from '../models/snippet.model';
import { TestDataService } from '../services/test-data.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-my-snippets',
  templateUrl: './my-snippets.component.html',
  styleUrls: ['./my-snippets.component.css']
})
export class MySnippetsComponent implements OnInit {
  errorMessage: string;
  filteredList: DataTest [];
  private _snippets: DataTest [] = [];
  data: DataTest;
  userId: string;
  p: any;
  searchString: string;
  filterString: string;

  constructor(private _dataService: TestDataService,
              private _router: Router,
              private _afAuth: AngularFireAuth,
              private _db: AngularFireDatabase) {
    // subscribe na firebase.User
    this._afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        console.log(this.userId);
      }
    });

  }

  ngOnInit(): void {
    this._dataService.getUserSnippets(this.userId).subscribe(list => {
      console.log(list);
      this.filteredList = list;
      this._snippets = list;
    });

  }

  deleteSnippet(uid) {
    console.log( 'Uid: ' + uid);
      if (confirm('Are you sure to delete this record ?') === true) {
        const dataRef = this._db.object(`data/${uid}`);
        dataRef.remove();
        this._router.navigate(['my-snippets']);
      }
  }


}
