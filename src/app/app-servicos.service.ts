import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root'
})
export class AppServicosService {
  alunos: Aluno[] = [];
  
  constructor() {}

  adicionar( aluno:Aluno ){
    this.alunos = JSON.parse(localStorage.getItem("data") || "[]");
    const id:any = this.alunos[this.alunos.length - 1]?.id;
    (id >= 1) && (aluno.id = id + 1);
    this.alunos.push(aluno);
    localStorage.setItem("data", JSON.stringify(this.alunos));
  }

  getAll(){
    this.alunos = JSON.parse(localStorage.getItem("data") || "[]");
    return this.alunos;
  }

  remover(id:number){
    this.alunos = this.alunos.filter(aluno => aluno.id != id)
    localStorage.setItem("data", JSON.stringify(this.alunos));
  }
}
