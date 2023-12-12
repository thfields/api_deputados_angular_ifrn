import { Component } from '@angular/core';
import { DeputadoService } from '../deputado.service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-busca-deputado',
  templateUrl: './busca-deputado.component.html',
  styleUrls: ['./busca-deputado.component.css']
})
export class BuscaDeputadoComponent {
  deputados: Deputado[] = []
  constructor(public ds: DeputadoService) {  }

  pesquisa(nome: string, partido: string) {
    if(nome != '' && partido == ''){
      this.ds.obterNome(nome).subscribe(res => {
        this.deputados = res.dados
      })
    }else if (nome == '' && partido != ''){
      this.ds.obterPartido(partido).subscribe(res => {
        this.deputados = res.dados
      })
    }else{
      this.ds.obterPartidoNome(partido, nome).subscribe(res => {
        this.deputados = res.dados
      })
    }



  }
}
