import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private url = 'https://dadosabertos.camara.leg.br/api/v2'
  constructor(private http: HttpClient) { }
  obterTodos(): Observable<any>{
    return this.http.get(`${this.url}/deputados?ordem=ASC&ordenarPor=nome`)
  }
  obterNome(nome:string): Observable<any>{
    return this.http.get(`${this.url}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  }
  obterPartido(partido:string): Observable<any>{
    return this.http.get(`${this.url}/deputados?siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`)
  }
  obterPartidoNome(partido:string, nome:string): Observable<any>{
    return this.http.get(`${this.url}/deputados?nome=${nome}&siglaPartido=${partido}&ordem=ASC&ordenarPor=nome
    `)
  }
}
