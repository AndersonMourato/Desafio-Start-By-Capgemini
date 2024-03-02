import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Aluno';
import { AppServicosService } from '../app-servicos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  aluno: Aluno = {
    id: 1,
    nome: "",
    nota01: "",
    nota02: "",
    media: 0,
    aprovado: false
  }

  constructor(
    public servicos: AppServicosService,
  ) {}
  
  ngOnInit(): void {
}
  
  btnGravar(){
    if( parseFloat(this.aluno.nota01) >= 0 && parseFloat(this.aluno.nota02) >= 0 && this.aluno.nome !== ""){
      this.aluno.media = (parseFloat(this.aluno.nota01) + parseFloat(this.aluno.nota02)) / 2;
      this.aluno.media > 6 ? this.aluno.aprovado = true : this.aluno.aprovado = false;
      
      this.servicos.adicionar( this.aluno );
      this.aluno.nome = "";
      this.aluno.nota01 = "";
      this.aluno.nota02 = "";
    }else{
      alert("Prencha todos os campos corretamente.");
    }
  }

}
