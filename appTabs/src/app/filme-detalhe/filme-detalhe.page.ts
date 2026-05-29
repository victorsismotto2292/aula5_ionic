import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
  standalone: false,
})
export class FilmeDetalhePage implements OnInit {
  filme: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const getNav = this.router.getCurrentNavigation();
    if (getNav?.extras.state) {
      this.filme = getNav.extras.state['paramFilme'];
    }
  }

  ngOnInit() {}
}