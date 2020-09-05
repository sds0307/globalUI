import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../../models/users.interface';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from 'src/utils/handleError';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    private usersUrl = 'https://jsonplaceholder.typicode.com/users';

    // All users
    users$ = this.http.get<IUsers[]>(this.usersUrl)
        .pipe(
            tap(data => console.log('Users', JSON.stringify(data))),
            catchError(handleError)
        );
}