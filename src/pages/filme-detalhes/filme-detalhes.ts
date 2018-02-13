import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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

  public filme;
  public filmeid;
  public filmeImg;
  public listaimg = new Array<any>();

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
