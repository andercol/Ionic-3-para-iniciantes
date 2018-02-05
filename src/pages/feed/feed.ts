//import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Anderson Colin",
    data: "Fevereiro 3, 2018",
    descricao: "Estou criando um APP incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comments: "11h ago"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string ="Anderson Colin";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log((data));
      }, error => {
        console.log(error);
      }
    )



    /*console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10, 99);
    this.movieProvider.getLatestMovies().subscribe(
      data =>{
        const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      }, error =>{
        console.log(error);
      }
    )*/
  }

}
