import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhePageRoutingModule } from './filme-detalhe-routing.module';

import { FilmeDetalhePage } from './filme-detalhe.page';

import { Component } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDetalhePageRoutingModule
  ],
  declarations: [FilmeDetalhePage]
})

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class FilmeDetalhePageModule {}
