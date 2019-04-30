import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  private getMovieInfoObservable: Observable<any>;
  private getTomotoObservable: Observable<any>;
  private getTopCriticObservable: Observable<any>;
  private getUserReviewObservable: Observable<any>;
  private getDozenReviewsObservable: Observable<any>;

  getMovieInfo(titleUrl) {
    if (this.getMovieInfoObservable) {
      return this.getMovieInfoObservable;
    } else {
      this.getMovieInfoObservable = this.http.get(`${environment.url}m/movieinfo/name/${titleUrl}`).pipe(shareReplay());
      return this.getMovieInfoObservable;
    }
  }

  getTomotometer(titleUrl) {
    if (this.getTomotoObservable) {
      return this.getTomotoObservable;
    } else {
      this.getTomotoObservable = this.http.get(`${environment.url}cr/tomotometer/name/${titleUrl}`).pipe(shareReplay());
      return this.getTomotoObservable;
    }
  }

  getTopCriticScore(titleUrl) {
    if (this.getTopCriticObservable) {
      return this.getTopCriticObservable;
    } else {
      this.getTopCriticObservable = this.http.get(`${environment.url}cr/topcriticmeter/name/${titleUrl}`).pipe(shareReplay());
      return this.getTopCriticObservable;
    }
  }

  getUserReviewInfo(movieId) {
    if (this.getUserReviewObservable) {
      return this.getUserReviewObservable;
    } else {
      this.getUserReviewObservable = this.http.get(`${environment.usersUrl}reviews/scoreboard/${movieId}`).pipe(shareReplay());
      return this.getUserReviewObservable;
    }
  }
  //${environment.url}
  getDozenReviews(movieId) {
    if (this.getDozenReviewsObservable) {
      return this.getDozenReviewsObservable;
    } else {
      this.getDozenReviewsObservable = this.http.get(`${environment.url}cr/topdozenreviews/ID/${movieId}`).pipe(shareReplay());
      return this.getDozenReviewsObservable;
    }
  }
}
