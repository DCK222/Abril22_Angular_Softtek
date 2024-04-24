import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { InmueblesServicioService } from '../_servicio/inmuebles-servicio.service';
@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './inmuebles.component.html',
  styleUrl: './inmuebles.component.css'
})

export class InmueblesComponent implements OnInit {
  id: number | undefined;
  infoporid: string | undefined;
  imageUrl: string | undefined;
  titulo: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private inmueblesServicioService: InmueblesServicioService 
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = +idParam;
        const item = this.inmueblesServicioService.info.find(item => item.id === this.id); // Accediendo a los datos a través del servicio
        this.infoporid = item ? item.info : 'Información no disponible';
        this.imageUrl = item ? item.imageUrl : undefined;
        this.titulo = item ? item.titulo : undefined;
       
      }
    });
  }
}