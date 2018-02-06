import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies() {
      return this.http.get(this.baseApiPath + `/movie/popular?api_key=` + this.getApiKey() + `&language=pt-BR`);
  }

  getApiKey(): string{

    return "cc620f2cd38fa17fba4d0b920a4961e5";

  }

}
