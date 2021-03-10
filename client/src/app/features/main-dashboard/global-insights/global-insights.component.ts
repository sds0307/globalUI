import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { IUsers } from 'src/models/users.interface';

@Component({
  selector: 'app-global-insights',
  templateUrl: './global-insights.component.html',
  styleUrls: ['./global-insights.component.less']
})
export class GlobalInsightsComponent {

  constructor(private usersService: UsersService) { }

  public $users: Observable<IUsers[]> = this.usersService.getTopUsers(4)
  .pipe(
    catchError(err => {
      console.log('error: ', err);
      return EMPTY;
    })
  );

}
