import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejercicio2-sub-pagina',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2-sub-pagina.component.html',
  styleUrl: './ejercicio2-sub-pagina.component.css'
})
export class Ejercicio2SubPaginaComponent implements OnInit {
  info = [
    { id: 1, titulo:"Hacking Etico" , info: 'El hackeo ético, también conocido como "penetración ética", es una práctica en la que los profesionales de seguridad informática utilizan sus habilidades para identificar y solucionar vulnerabilidades en sistemas de información. A diferencia de los hackers maliciosos, los hackeadores éticos trabajan dentro de un marco legal y ético, obteniendo permiso explícito antes de realizar pruebas de penetración. Su objetivo es mejorar la seguridad de las redes y sistemas informáticos, ayudando a proteger la información confidencial de organizaciones y usuarios.', imageUrl: './assets/img/download.jpg'},
    { id: 2, titulo:"Legislacion de Seguridad en Europa" , info: 'La legislación relacionada con la seguridad cibernética en Europa ha experimentado avances significativos en los últimos años. La Ley General de Protección de Datos (GDPR por sus siglas en inglés) es un ejemplo destacado, estableciendo estándares estrictos para la protección de la información personal y las sanciones por incumplimiento. Además, la Directiva de Seguridad de las Redes y la Información (NIS) busca garantizar la seguridad de las redes y sistemas de información en sectores críticos, promoviendo la colaboración entre los Estados miembros de la Unión Europea y estableciendo requisitos de notificación de incidentes.', imageUrl: './assets/img/ethical-hacking-ciberseguridad-behackerpro.jpg' },
    { id: 3, titulo:"¿Como evitar que me hackeen?", info: 'Para evitar ser hackeado, es fundamental adoptar buenas prácticas de seguridad cibernética. Esto incluye mantener actualizados los programas y sistemas operativos, utilizar contraseñas seguras y únicas para cada cuenta, activar la autenticación de dos factores siempre que sea posible, evitar hacer clic en enlaces o descargar archivos de fuentes desconocidas, y estar atento a señales de phishing o correos electrónicos sospechosos. Además, es recomendable utilizar software antivirus y cortafuegos, así como realizar copias de seguridad regulares de los datos importantes.', imageUrl: './assets/img/hacking-etico-articulo-1200x630.jpg'},
    { id: 4, titulo:"¿Que es Phising?", info: 'El phishing es una técnica utilizada por ciberdelincuentes para engañar a las personas y obtener información confidencial, como nombres de usuario, contraseñas y detalles de tarjetas de crédito. Esto se logra enviando correos electrónicos fraudulentos que parecen ser de empresas legítimas o personas de confianza, con el objetivo de que la víctima revele sus datos personales. Estos correos electrónicos a menudo contienen enlaces maliciosos que dirigen a sitios web falsos diseñados para robar información. El phishing también puede llevarse a cabo a través de llamadas telefónicas o mensajes de texto. Es importante estar alerta y verificar la autenticidad de las comunicaciones antes de compartir información sensible en línea.', imageUrl: './assets/img/hacking-etico.jpg'}
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
