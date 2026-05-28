/* eslint-disable eol-last */
export interface IFilme{
    nome: string;
    lancamento: string;
    duracao: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string; // *?* -> Campo não obrigatório
    favorito: boolean;
}