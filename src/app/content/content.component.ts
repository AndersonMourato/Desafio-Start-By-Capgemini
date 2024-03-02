import { Component, OnInit } from '@angular/core';
import { AppServicosService } from '../app-servicos.service';
import { Aluno } from '../Aluno';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  alunos: Aluno[] | undefined;
  void: boolean = true;
  constructor(
    public serviceAlunos: AppServicosService 
  ) {
  }

  ngOnInit(): void {
    this.alunos = this.serviceAlunos.getAll();
    (this.alunos.length == 0 || this.alunos == undefined) ? (this.void = true) : (this.void = false);
  }

  ngDoCheck(){
    this.alunos = this.serviceAlunos.getAll();
    (this.alunos.length == 0 || this.alunos == undefined) ? (this.void = true) : (this.void = false);
  }

}
