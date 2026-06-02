import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaAtores: IAtor[] = [
    {
      nome: 'Leonardo DiCaprio',
      nascimento: '1974-11-11',
      nacionalidade: 'Americano',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      filmes: ['Interestelar', 'O Lobo de Wall Street', 'A Origem'],
      favorito: false
    },
    {
      nome: 'Meryl Streep',
      nascimento: '1949-06-22',
      nacionalidade: 'Americana',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/feTsLFG3OpKLuCv3dUkBYiYBfhG.jpg',
      filmes: ['O Diabo Veste Prada', 'Kramer vs. Kramer', 'A Dama de Ferro'],
      favorito: false
    },
    {
      nome: 'Denzel Washington',
      nascimento: '1954-12-28',
      nacionalidade: 'Americano',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jj2Gcobpopokal0YstuCQW0ldJ4.jpg',
      filmes: ['Dia de Treinamento', 'Malcolm X', 'O Protetor'],
      favorito: false
    },
    {
      nome: 'Cate Blanchett',
      nascimento: '1969-05-14',
      nacionalidade: 'Australiana',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/javAKAUOaBwgapnLFdBoMVSi3KB.jpg',
      filmes: ['O Senhor dos Anéis', 'Carol', 'Tár'],
      favorito: false
    },
    {
      nome: 'Morgan Freeman',
      nascimento: '1937-06-01',
      nacionalidade: 'Americano',
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jPsLqiYGSofU4s6BjrxnefMfabb.jpg',
      filmes: ['Um Sonho de Liberdade', 'Seven', 'Batman Begins'],
      favorito: false
    }
  ];

    exibirAtor(ator: IAtor) {
    const navigationExtras: NavigationExtras = { state: { paramAtor: ator } };
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar este ator?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { ator.favorito = false; }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
