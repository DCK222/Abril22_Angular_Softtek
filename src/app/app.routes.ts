import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { MainComponent } from './main/main.component';
import { Ejercicio2SubPaginaComponent } from './ejercicio2-sub-pagina/ejercicio2-sub-pagina.component';
import { Ejercicio2mainComponent } from './ejercicio2main/ejercicio2main.component';

export const routes: Routes = [
    { path: '', component: MainComponent }, 
    { path: 'inmuebles/:id', component: InmueblesComponent }, 
    { path: 'ejercicio2-sub-pagina/:id', component: Ejercicio2SubPaginaComponent }, 
    { path: 'ejercicio2',  component: Ejercicio2mainComponent }, 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }