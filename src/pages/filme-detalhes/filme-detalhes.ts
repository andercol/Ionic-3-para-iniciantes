
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
//import * as Vibrant from 'node-vibrant';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [ MoovieProvider]
})
export class FilmeDetalhesPage {

  public _Vibrant = require('node-vibrant');
  public filme;
  public filmeid;
  public filmeImg;
  public listaimg = new Array<any>();
  public colorThief = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider
  ) {
  }


  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id"); //navParams pega todos os parametros que foram passados.

    this.movieProvider.getMovieDetails(this.filmeid).subscribe(
      data => {

        let retorno = data as any;
        this.filme = retorno;

        let v = this._Vibrant.from('https://image.tmdb.org/t/p/w300/' + this.filme.poster_path);
        v.getPalette((err, palette) => console.log(palette))
        v.getPalette((err, palette) => {
          console.log("xxxxxxxxxxxxxxx");
          console.log(palette.DarkVibrant._rgb[0]);
          let retorno = palette;
          this.colorThief = retorno;
        }) ;
        //this.colorThief = new ColorThief().getColor('https://image.tmdb.org/t/p/w300/' + this.filme.poster_path);
        console.log(this.colorThief);

      },error =>{
        console.log(error);
      }
    )



    this.movieProvider.getMovieImages(this.filmeid).subscribe(
      data => {

        let retorno = data as any;
        this.filmeImg = retorno;
        console.log("getMovieImages ");
        this.listaimg = retorno.backdrops;
        console.log(this.listaimg);
      },error =>{
        console.log(error);
      }
    )

  }

}
