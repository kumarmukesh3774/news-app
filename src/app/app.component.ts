import { Component } from '@angular/core';
import {NewsService} from './news.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url:string="";
  news:string[];
constructor(private newsService:NewsService){};


  worldNews() {
    this.url="https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0829585b678c492ea688ce9899e48313";
    this.newsService.apiCallHandler(this.url)
        .subscribe(news => this.news = news);
  }

}
