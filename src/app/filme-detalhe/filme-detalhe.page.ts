import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/dot-notation */
import { IFilme } from './../model/IFilme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
})
export class FilmeDetalhePage implements OnInit {
  filme: any;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.filme = getNav.extras.state.paramFilme;
      }
    });
  }
}
