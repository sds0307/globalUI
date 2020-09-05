import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { IUsers } from 'src/models/users.interface';

@Component({
  selector: 'global-insights',
  templateUrl: './global-insights.component.html',
  styleUrls: ['./global-insights.component.less']
})
export class GlobalInsightsComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  public $users : Observable<IUsers[]> = this.usersService.users$
  .pipe(
    catchError(err => {
      console.log('error: ', err);
      return EMPTY;
    })
  );

  public userList1 : IUsers[];

  ngOnInit() {
    this.$users.subscribe(
      (usersList) => {this.userList1 = usersList}
    )
  }

}
