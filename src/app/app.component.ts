import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { InmueblesComponent } from "./inmuebles/inmuebles.component";
import { MainComponent } from "./main/main.component";
import { Ejercicio2mainComponent } from "./ejercicio2main/ejercicio2main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterModule, InmueblesComponent, MainComponent, Ejercicio2mainComponent]
})
export class AppComponent {
  title = 'abril22_Angular_Softtek';
}
