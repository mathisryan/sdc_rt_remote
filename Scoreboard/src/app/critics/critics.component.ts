import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'critics',
  templateUrl: './critics.component.html',
  styleUrls: ['./critics.component.css']
})
export class CriticsComponent implements OnInit {
  cdnUrl ='';
  titleUrl = '';
  title = '';
  reviews = [];
  numberOfReviews = 0;
  numberOfFresh = 0;
  numberOfRotten = 0;
  numberOfTopCritics = 0;

  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.cdnUrl=environment.cdn;
    // var url = window.location.href;
    // if (url[url.length-1]==='/') {
    //   url = url.substring(0,url.length-1);
    // }
    // var urlArray = url.split('/');
    // this.titleUrl = urlArray[urlArray.length-1];
    this.titleUrl = (Math.floor((Math.random() * 1000000) + 1)).toString();
    this.data.getMovieInfo(this.titleUrl).subscribe(data => {
    this.title=data['0']['title'];
    var movieId = data['0']['id'];
      //get reviews
      this.data.getDozenReviews(movieId).subscribe(data => {
        // console.log(data);
        this.reviews = data['0'];
      });
    });

    this.data.getTomotometer(this.titleUrl).subscribe(data => {
      this.numberOfReviews = data['0']['numOfReviews'];
      this.numberOfFresh = data['0']['fresh'];
      this.numberOfRotten = data['0']['rotten'];
    });

    this.data.getTopCriticScore(this.titleUrl).subscribe(data => {
      this.numberOfTopCritics = data['0']['numOfReviews'];
    });


  }

}
