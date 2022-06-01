import { ICartaz } from './../model/IFilme';
import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaSeries: ICartaz[] = [
    {
      nome: 'Cavaleiro da Lua (2022)',
      lancamento: '30/03/2022',
      duracao: '47m/Ep',
      classificacao: 8.2,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg',
      generos: ['Action & Adventure', 'Sci-Fi & Fantasy', 'Mistério'],
      pagina: '/cavaleiro-lua',
      favorito: false
    },
    {
      nome: 'Halo (2022)',
      lancamento: '24/03/2022 (BR)',
      duracao: '1h/Ep',
      classificacao: 8.6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg',
      generos: ['Action & Adventure', 'Sci-Fi & Fantasy'],
      pagina: '/halo',
      favorito: false
    },
    {
      nome: 'Chaves (1973)',
      lancamento: '1973 (MEX)',
      duracao: '23m/Ep',
      classificacao: 7.8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8D8rR5UgZlhLZ5k3cnMNTtYA8Wn.jpg',
      generos: ['Comédia', 'Família'],
      pagina: '/chaves',
      favorito: false
    },
    {
      nome: 'Arcane (2021)',
      lancamento: '06/11/2021',
      duracao: '39m/Ep',
      classificacao: 9.1,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg',
      generos: ['Animação', 'Crime'],
      pagina: '/arcane',
      favorito: false
    }
  ];
  exibirFilme(filme: ICartaz){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: ICartaz) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
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
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
