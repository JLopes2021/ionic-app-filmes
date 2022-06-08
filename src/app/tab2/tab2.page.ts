import { Component } from '@angular/core';
import { ISeries } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

// eslint-disable-next-line @typescript-eslint/member-ordering
listaSeries: ISeries[] = [
{
nome: 'Pretty Little Liars (2010)',
lancamento: '08/06/2010',
duracao: '7 Temporadas',
classificacao: 9,
cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lntOFDrvVPBAULcrE8NoUlExa11.jpg',
generos: ['Drama', 'Suspense', 'Fantasia'],
pagina: '/PLL',
favorito: true
},
{
nome: 'The Vampire Diaries (2009)',
lancamento: '10/09/2009',
duracao: '8 Temporadas',
classificacao: 6,
cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg',
generos: ['Drama sobrenatural', 'Horror', 'Romance'],
pagina: '/TVD',
favorito: false
},
{
nome: 'Friends (1994)',
lancamento: '22/09/1994',
duracao:'10 Temporadas',
classificacao: 9,
cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
generos:['Sitcom'],
pagina:'/friends',
favorito: false
},
{
nome: 'Brooklyn Nine-Nine(2013)',
lancamento: '17/09/2013',
duracao:'8 Temporadas',
classificacao: 6,
cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd5JwnNOqEDIKZ672wjEo8hzL7k.jpg',
generos:['Comédia','Sitcom', 'Policial'],
pagina:'/B99',
favorito: false
},
{
nome: 'Stranger Things (2016)',
lancamento: '15/07/2016',
duracao:'4 Temporadas',
classificacao: 9,
cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
generos:['Drama Adolescente','Ficcção Cientifica', 'Terror', 'Suspense'],
pagina:'/stranger-things',
favorito: false
},
{
  nome: 'The Walking Dead(2010)',
  lancamento: '31/10/2010',
  duracao:'11 Temporadas',
  classificacao: 6,
  cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
  generos:['Terror','Ficcção Pós-apocalíptica', 'Apocalipse Zumbi', 'Suspense'],
  pagina:'/TWD',
  favorito: false
},
{
  nome: 'The100(2014)',
  lancamento: '19/03/2014',
  duracao:'7 Temporadas',
  classificacao: 9,
  cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg',
  // eslint-disable-next-line max-len
  generos:['Distopia','Ficcção Cientifica', 'Ação', 'Drama', 'Ficção pós-apocalíptica','Aventura','Mistério', 'Ficcção Utópica e Distópica'],
  pagina:'/the100',
  favorito: false
  },
  {
    nome: 'Riverdale(2017)',
    lancamento: '26/01/2017',
    duracao:'5 Temporadas',
    classificacao: 9,
    cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6zBWSuYW3Ps1nTfeMS8siS4KUaA.jpg',
    generos:['Drama','Mistério', 'Crime Fiction'],
    pagina:'/Riverdale',
    favorito: false
    },
    {
      nome: 'Shadowhunters(2019)',
      lancamento: '06/05/2019',
      duracao:'3 Temporadas',
      classificacao: 9,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/66YHvvVduC21xcMXPpBBF0ywyVZ.jpg',
      generos:['Drama','Ação', 'Sobrenatural','Terror'],
      pagina:'/Shadowhunters',
      favorito: false
      }

];
exibirFilme(filme: ISeries){
const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
this.router.navigate(['filme-detalhe'],navigationExtras);
}

async exibirAlertaFavorito(filme: ISeries) {
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
