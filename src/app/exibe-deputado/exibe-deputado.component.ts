import { Component, OnInit } from '@angular/core';
import { DeputadoService } from '../deputado.service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-exibe-deputado',
  templateUrl: './exibe-deputado.component.html',
  styleUrls: ['./exibe-deputado.component.css']
})
export class ExibeDeputadoComponent implements OnInit {
  deputados: Deputado[] = []
  constructor(private ds: DeputadoService){
    ds.obterTodos().subscribe(res => {
      this.deputados = res.dados
    })
  }
  ngOnInit():void {}
}
