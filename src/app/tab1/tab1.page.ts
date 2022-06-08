import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      descricao: 'Não quero por nada',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Massacre no Bairro Japonês (1991)',
      lancamento: '23/08/1991 (US)',
      duracao: '1h19m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vgiGW7F1VVue9EAOR70gJwHecLj.jpg',
      generos: ['Ação'],
      pagina: '/massacre-japones',
      favorito: false
    },
    {
      nome: 'O Poderoso Chefão (1972)',
      lancamento: '07/07/1972',
      duracao: '2h55m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/godfather1',
      favorito: false
    },
    {
      nome: 'Vende-se Esta Casa (2018)',
      lancamento: '19/01/2018 (BR)',
      duracao: '1h34m',
      classificacao: 3,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tAcsTHfzYwxe0QkarzHqNfnqvxa.jpg',
      generos: ['Terror', 'Thriller'],
      pagina: '/vende-casa',
      favorito: false
    }
  ];

  async somar(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Deseja votar?',
      message: '',
      buttons: [
        {
          text: 'Avaliar Negativamente',
          role: 'cancel',
          handler: () => {
            filme.classificacao--;
          }
        }, {
          text: 'Avaliar, Positivamente.',
          handler: () => {
            filme.classificacao++;
            this.apresentarToast();
          }
        },
        {
          text: 'Não quero avaliar'
        }
      ]
    });
    console.log('alerta favorito');
    await alert.present();
  }

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
    console.log('Exibe o filme');
  }

  async exibirAlertaFavorito(filme: IFilme) {
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
    console.log('alerta favorito');
    await alert.present();
  }

  async exibirAlertaClique(filme: IFilme) {
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
    console.log('alerta favorito');
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
