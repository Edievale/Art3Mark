import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/classes';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from "../detalle/detalle.component";
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(public navCtrl:NavController,
                public _listaDeseos:ListaDeseosService) { }

    ngOnInit(): void { }

    irDetalle(lista: Lista, i:number){
        this.navCtrl.push(DetalleComponent, {
            lista, i});
    }
}
