import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Interestelar',
      lancamento: '2014-11-06',
      duracao: '2h 49m',
      classificacao: 8.7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
      generos: ['Ficção Científica', 'Drama', 'Aventura'],
      pagina: '/interstellar',
      favorito: false
    },
    {
      nome: 'Matrix',
      lancamento: '1999-05-21',
      duracao: '2h 16m',
      classificacao: 8.7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      generos: ['Ação', 'Ficção Científica'],
      pagina: '/matrix',
      favorito: false
    },
    // +3 filmes do exercício 1
    {
      nome: 'O Poderoso Chefão',
      lancamento: '1972-03-24',
      duracao: '2h 55m',
      classificacao: 9.2,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsLegHnDmni.jpg',
      generos: ['Crime', 'Drama'],
      pagina: '/godfather',
      favorito: false
    },
    {
      nome: 'Clube da Luta',
      lancamento: '1999-10-15',
      duracao: '2h 19m',
      classificacao: 8.8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      generos: ['Drama', 'Thriller'],
      pagina: '/fight-club',
      favorito: false
    },
    {
      nome: 'Senhor dos Anéis: O Retorno do Rei',
      lancamento: '2003-12-17',
      duracao: '3h 21m',
      classificacao: 9.0,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      generos: ['Aventura', 'Fantasia', 'Ação'],
      pagina: '/lotr',
      favorito: false
    }
  ];

  exibirFilme(filme: IFilme) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}