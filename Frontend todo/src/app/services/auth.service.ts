import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export enum LOCAL_STORAGE_KEYS {
  Authorization = 'Authorization',
}
@Injectable()
export class AuthService {
  entityUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient,private router: Router) {}
  private clearPrevStorage() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.Authorization);
  }

  public logout(prompt: boolean = true): void {
    this.clearPrevStorage();
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  private setSession(authResult: any): void {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.Authorization,
      authResult.Authorization
    );
  }

  public login(credentials: any): Observable<any> {
    return this.http.post(this.entityUrl + 'auth/login', credentials).pipe(
      map((res: any) => {
        this.clearPrevStorage();
        if (res.Authorization) {
          this.setSession(res);
          return res;
        }
      })
    );
  }
}
