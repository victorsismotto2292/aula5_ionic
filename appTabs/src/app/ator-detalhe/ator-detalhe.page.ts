import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ator-detalhe',
  templateUrl: './ator-detalhe.page.html',
  styleUrls: ['./ator-detalhe.page.scss'],
  standalone: false,
})
export class AtorDetalhePage implements OnInit {
  ator: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const getNav = this.router.getCurrentNavigation();
    if (getNav?.extras.state) {
      this.ator = getNav.extras.state['paramAtor'];
    }
  }

  ngOnInit() {}
}
