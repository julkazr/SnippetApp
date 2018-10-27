import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../services/test-data.service';
import { DataTest } from '../models/snippet.model';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-admin-snippets',
  templateUrl: './admin-snippets.component.html',
  styleUrls: ['./admin-snippets.component.css']
})
export class AdminSnippetsComponent implements OnInit {
  dataList: DataTest [];
  p: any;
  public searchString: string;
  constructor(private _dataService: TestDataService,
              private _db: AngularFireDatabase,
              private _router: Router) { }

  ngOnInit(): void {
    this._dataService.getSnippets().valueChanges().subscribe(list => {
      console.log(list);
      this.dataList = list.reverse();
    });
  }

  deleteSnippet(uid) {
    if (confirm('Are you sure to delete this record?') === true) {
      const dataRef = this._db.object(`data/${uid}`);
      dataRef.remove();
      this._router.navigate(['admin-snippets']);
    }
  }

}
