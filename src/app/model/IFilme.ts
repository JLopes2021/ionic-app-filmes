/* eslint-disable eol-last */
export interface IFilme{
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
  descricao?: string;
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
export interface ICartaz{
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[];
  descricao?: string;
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
export interface IAtores{
  nome: string;
  cartaz: string;
  idade: number;
  classificacao: number;
  descricao?: string;
  filmes: string[];
  series: string[];
  favorito: boolean;

}
