import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}
  listaFilmes: IFilme[] = [
  {
    nome: 'Interestelar',
    lancamento: '2014-11-06',
    duracao: '2h 49m',
    classificacao: 8.7,
    cartaz: 'assets/cartazes/interestelar.jpg',
    generos: ['Ficção Científica', 'Drama', 'Aventura'],
    pagina: '/interstellar',
    favorito: true
  },
  {
    nome: 'Matrix',
    lancamento: '1999-05-21',
    duracao: '2h 16m',
    classificacao: 8.7,
    cartaz: 'assets/cartazes/matrix.jpg',
    generos: ['Ação', 'Ficção Científica'],
    pagina: '/matrix',
    favorito: false
  }
];

}
