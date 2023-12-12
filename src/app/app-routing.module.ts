import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibeDeputadoComponent } from './exibe-deputado/exibe-deputado.component';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';

const routes: Routes = [
  {path: 'home', component: ExibeDeputadoComponent},
  {path: 'busca', component: BuscaDeputadoComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
