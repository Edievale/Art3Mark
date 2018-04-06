import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { NavController } from "ionic-angular";
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from "../detalle/detalle.component";
import { Lista } from '../../app/classes';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

    constructor (private _listaDeseos:ListaDeseosService,
                 private navCtrl:NavController ) { }

    ngOnInit(): void { }

    irAgregar(){
        this.navCtrl.push(AgregarComponent);
    }

    irDetalle(lista: Lista, i:number){
        this.navCtrl.push(DetalleComponent, {
            lista, i});
    }
}
