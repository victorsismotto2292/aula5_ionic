import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad',
      lancamento: '2008-01-20',
      temporadas: 5,
      classificacao: 9.5,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      generos: ['Drama', 'Crime', 'Thriller'],
      favorito: false
    },
    {
      nome: 'The Last of Us',
      lancamento: '2023-01-15',
      temporadas: 2,
      classificacao: 8.8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      generos: ['Drama', 'Ficção Científica', 'Ação'],
      favorito: false
    },
    {
      nome: 'Chernobyl',
      lancamento: '2019-05-06',
      temporadas: 1,
      classificacao: 9.4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg',
      generos: ['Drama', 'História'],
      favorito: false
    },
    {
      nome: 'Stranger Things',
      lancamento: '2016-07-15',
      temporadas: 4,
      classificacao: 8.7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      generos: ['Drama', 'Fantasia', 'Terror'],
      favorito: false
    },
    {
      nome: 'Dark',
      lancamento: '2017-12-01',
      temporadas: 3,
      classificacao: 8.8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
      generos: ['Drama', 'Ficção Científica', 'Mistério'],
      favorito: false
    }
  ];

    exibirSerie(serie: ISerie) {
    const navigationExtras: NavigationExtras = { state: { paramSerie: serie} };
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { serie.favorito = false; }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
