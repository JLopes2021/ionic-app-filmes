import { ICartaz, IAtores } from './../model/IFilme';
import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaAtores: IAtores[] = [
{
  nome: 'Tom Holland',
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
  idade: 26,
  classificacao: 10,
  filmes: ['Homem Aranha'],
  series: ['Sem séries'],
  favorito: false,
},
{
  nome: 'Marlon Brando',
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg',
  idade: 76,
  classificacao: 10,
  filmes: ['O Poderoso Chefão'],
  series: ['Sem séries'],
  favorito: false,
},
{
  nome: 'Terry Crews',
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pxTY4SglLo5hFcMH00MxPeC5u55.jpg',
  idade: 53,
  classificacao: 100,
  descricao:'Conhecido por filmes de comédia e alguns de ação, mais conhecido também no Brasil como Latrell de As Branquelas',
  filmes: ['As Branquelas'],
  series: ['B99','Todo Mundo Odeia o Cris','Eu, a Patroa e as Crianças'],
  favorito: false,
}
  ];
  exibirFilme(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramFilme:ator}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async somar(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Deseja votar?',
      message: '',
      buttons: [
        {
          text: 'Avaliar Negativamente',
          role: 'cancel',
          handler: () => {
            ator.classificacao--;
          }
        }, {
          text: 'Avaliar, Positivamente.',
          handler: () => {
            ator.classificacao++;
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
