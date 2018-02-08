//import { Http } from '@angular/http';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html",
  providers: [MoovieProvider]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Anderson Colin",
    data: "Fevereiro 3, 2018",
    descricao: "Estou criando um APP incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comments: "11h ago"
  };

  public lista_filmes = new Array<any>();

  public nome_usuario: string = "Anderson Colin";

  public loader;
  public refresher;
  public isrefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {}

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
      //duration: 3000
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isrefreshing = true;

    this.carregarFilmes();
  }

  // ionViewDidLoad - só carrega uma vez
  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregarFilmes(){

    this.abreCarregando();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = data as any;
        //const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = response.results;

        console.log(this.lista_filmes);

        this.fechaCarregando();
        if (this.isrefreshing) {
          this.refresher.complete();
          this.isrefreshing = false;
        }
      },
      error => {
        console.log(error);
        this.fechaCarregando();
        if (this.isrefreshing) {
          this.refresher.complete();
          this.isrefreshing = false;
        }
      }
    );
  }


}


