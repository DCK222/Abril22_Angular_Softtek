import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './inmuebles.component.html',
  styleUrl: './inmuebles.component.css'
})

export class InmueblesComponent implements OnInit {
  info = [
    { id: 1, titulo:"Villa Serenidad en las Colinas de Hollywood" , info: 'Ubicada majestuosamente en lo alto de las colinas de Hollywood, Villa Serenidad ofrece un estilo de vida verdaderamente exclusivo. Con vistas panorámicas de Los Ángeles que se extienden hasta el océano, esta residencia contemporánea es un monumento a la elegancia moderna. Desde el momento en que pones un pie en sus impresionantes jardines paisajísticos, te sumerges en un oasis de lujo y tranquilidad. Con una arquitectura vanguardista, espacios interiores amplios y luminosos, y comodidades de última generación, esta casa es ideal para aquellos que buscan lo mejor en el estilo de vida californiano. Desde el momento en que pones un pie en sus impresionantes jardines paisajísticos, te sumerges en un oasis de lujo y tranquilidad. Con una arquitectura vanguardista, espacios interiores amplios y luminosos, y comodidades de última generación, esta casa es ideal para aquellos que buscan lo mejor en el estilo de vida californiano.' , imageUrl: './assets/casa-lujo-inhaus-sevilla-zona-invitados.jpg'},
    { id: 2, titulo:"Palacio del Lago en Ginebra, Suiza" , info: 'Bienvenido al Palacio del Lago, una obra maestra arquitectónica enclavada en las orillas del lago Lemán en Ginebra, Suiza. Esta impresionante propiedad combina la opulencia con la ubicación incomparable, ofreciendo vistas panorámicas del lago y los Alpes suizos. Con más de 20,000 pies cuadrados de espacio habitable meticulosamente diseñado, esta mansión cuenta con características de diseño únicas, como una piscina cubierta climatizada, una bodega de vinos subterránea y un cine en casa de última generación. Cada detalle ha sido cuidadosamente considerado para brindar un estilo de vida de lujo y comodidad incomparables en uno de los destinos más exclusivos del mundo.Bienvenido al Palacio del Lago, una obra maestra arquitectónica enclavada en las orillas del lago Lemán en Ginebra, Suiza. Esta impresionante propiedad combina la opulencia con la ubicación incomparable, ofreciendo vistas panorámicas del lago y los Alpes suizos. Con más de 20,000 pies cuadrados de espacio habitable meticulosamente diseñado, esta.', imageUrl: './assets/casa-lujo.jpg' },
    { id: 3, titulo:"Residencia Paradiso en la Riviera Italiana", info: 'La Residencia Paradiso, ubicada en la pintoresca Riviera Italiana, es un refugio de ensueño que combina la elegancia clásica con el encanto mediterráneo. Situada en un terreno privado con vistas al mar Tirreno, esta villa ofrece una mezcla perfecta de lujo y serenidad. Desde sus exuberantes jardines hasta sus terrazas con vistas al mar, cada rincón de esta propiedad ha sido diseñado para capturar la belleza natural de su entorno. Con una piscina infinita, una casa de huéspedes independiente y una cocina gourmet al aire libre, la Residencia Paradiso es el destino definitivo para aquellos que buscan una escapada indulgente en la costa italiana.La Residencia Paradiso, ubicada en la pintoresca Riviera Italiana, es un refugio de ensueño que combina la elegancia clásica con el encanto mediterráneo. Situada en un terreno privado con vistas al mar Tirreno, esta villa ofrece una mezcla perfecta de lujo y serenidad. Desde sus exuberantes jardines hasta sus terrazas con vistas al mar, cada rincón de esta propiedad ha sido diseñado para capturar l', imageUrl: './assets/casas-lujo-madrid-inhaus-2.jpg'}
  ];
  titulo: string | undefined;
  imageUrl: string | undefined;
  id: number | undefined; 
  infoporid: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = +idParam;  
        const item = this.info.find(item => item.id === this.id);
        this.infoporid = item ? item.info : 'Información no disponible';
        this.imageUrl = item ? item.imageUrl : undefined;
        this.titulo = item ? item.titulo : undefined;
      } 
    });
  }
}