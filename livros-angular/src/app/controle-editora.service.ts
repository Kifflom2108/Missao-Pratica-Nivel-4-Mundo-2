import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora DarkSide Books' },
    { codEditora: 2, nome: 'Editora Wish' },
    { codEditora: 3, nome: 'Editora Draco' },
    { codEditora: 4, nome: 'Editora Estronho' },
    { codEditora: 5, nome: 'Editora Morro Branco' },
  ];

  constructor() {}

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(
      (e: Editora) => e.codEditora == codEditora
    );
    return editora?.nome || 'Desconhecido';
  }
}
