import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {DataService} from './data.service';
import { ModalService } from './modal.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    //set default state
    title = 'Untitled';
    titleUrl = '';
    topCritics = false;

    //Image/Vid Defaults
    videoUrl = null;
    posterUrl= environment.cdn + 'assets/img/poster.default.gif';
    backdropUrl= environment.cdn + 'assets/img/backdrop.default.jpg';

    //Tomato Meter Defaults
    tomotoMeter=60;
    avgRating=5.0;
    numReviews=50;
    rotten = 0;
    fresh = 0;
    criticConsensus='Some random review goes here';
    criticRatingImg = environment.cdn + 'assets/img/large-fresh.png';

    //User Defaults
    usrScore = 'N/A';
    avgUsrRating = 5.0;
    numUsrReviews = 100;
    usrRatingImg = environment.cdn + 'assets/img/no-audience.png';
    videoUrlText = 'http://www.youtube.com/embed/dQw4w9WgXcQ';

    constructor(private data: DataService, private modalService: ModalService, private sanitizer: DomSanitizer) {

    }

    playVideo(event: Event) {
      if (this.titleUrl !== 'black_panther') {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlText + '?autoplay=1');
      }
      this.modalService.open('youtube-modal');
    }

    changeTopCritic(event: Event) {
      if (!this.topCritics) {
        this.topCritics=true;
        this.getTopCriticScore();
      }
    }

    changeAllCritic(event: Event) {
      if (this.topCritics) {
        this.topCritics=false;
        this.getTomotoMeterScore();
      }
    }

    getTopCriticScore() {
      this.data.getTopCriticScore(this.titleUrl).subscribe(data => {
        this.tomotoMeter=Math.round(data['tomatometer']);
        this.avgRating=data['avgrating'];
        this.numReviews=data['numOfReviews'];
        this.rotten = data['rotten'];
        this.fresh = data['fresh'];

        var aCriticReview = Math.floor((Math.random() * data.length));
        this.criticConsensus = data[aCriticReview]['review_text'];

        if (this.tomotoMeter > 75) {
          this.criticRatingImg = environment.cdn + 'assets/img/large-certified.png';
        } else if (this.tomotoMeter >= 55 && this.tomotoMeter<75) {
          this.criticRatingImg = environment.cdn + 'assets/img/large-fresh.png';
        } else {
          this.criticRatingImg = environment.cdn + 'assets/img/large-rotten.png';
        }
      });
    }

    getTomotoMeterScore() {
      this.data.getTomotometer(this.titleUrl).subscribe(data => {
        console.log('DATA', data);
        this.tomotoMeter=Math.round(data['0']['tomatometer']);
        this.avgRating=data['avgrating'];
        this.numReviews=data['0']['numOfReviews'];
        this.rotten = data['0']['rotten'];
        this.fresh = data['0']['fresh'];
        var aCriticReview = Math.floor((Math.random() * data.length));
        this.criticConsensus = data[aCriticReview]['review_text'];
        if (this.tomotoMeter > 75) {
          this.criticRatingImg = environment.cdn + 'assets/img/large-certified.png';
        } else if (this.tomotoMeter >= 55 && this.tomotoMeter<75) {
          this.criticRatingImg = environment.cdn + 'assets/img/large-fresh.png';
        } else {
          this.criticRatingImg = environment.cdn + 'assets/img/large-rotten.png';
        }
      });
    }

    ngOnInit() {
      // var url = window.location.href;
      // if (url[url.length-1]==='/') {
      //   url = url.substring(0,url.length-1);
      // }
      // var urlArray = url.split('/');
      // this.titleUrl = urlArray[urlArray.length-1];
      this.titleUrl = (Math.floor((Math.random() * 1000000) + 1)).toString();

      this.data.getMovieInfo(this.titleUrl).subscribe(data => {
        this.title=data['0']['title'];
        this.posterUrl=data['0']['poster_url'];
        this.backdropUrl=data['0']['backdrop_url'];
        this.videoUrlText = 'http://www.youtube.com/embed/' + data['0']['video'];
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlText);
        var movieId = data['0']['id'];
        this.data.getUserReviewInfo(movieId).subscribe(data=> {
          this.usrScore=String(Math.round(data[0]['audienceScore'])) +'%';
          this.avgUsrRating= Math.round(data[0]['averageRating']*10)/10;
          this.numUsrReviews= data[0]['userRatings'];
          if (data[0]['userRatings'] < 2) {
            this.usrRatingImg = environment.url + 'assets/img/no-audience.png';
          } else if (data[0]['audienceScore'] >= 50) {
            this.usrRatingImg = environment.url + 'assets/img/audience-liked.png';
          } else if (data[0]['audienceScore'] < 50) {
            this.usrRatingImg = environment.url + 'assets/img/audience-disliked.png';
          }
        });
      });

      this.getTomotoMeterScore();

    }
}
