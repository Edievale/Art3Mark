import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    lista:Lista;
    indice:number;

    constructor(public navCtrl:NavController, 
                public navParams:NavParams,
                public _listaDeseos:ListaDeseosService,
                public alertCtrl:AlertController) {
        this.indice = navParams.get("i");
        this.lista = navParams.get("lista");
    }

    ngOnInit(): void { }

    actualizarItem(item:ListaItem){
        item.completado = !item.completado;
        // Comprobar si todos los elementos están marcados:
        let todosItemsMarcados = true;
        for (let item of this.lista.items) {
            if (!item.completado){
                todosItemsMarcados = false;
                break;
            }
        }
        
        this.lista.terminado = todosItemsMarcados;
        
        
        this._listaDeseos.updateData();
    }

    delItem(indice:number){
        this.lista.items.splice(indice,1);
        this._listaDeseos.updateData();
    }

    delLista(){
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre + " será eliminada",
            message: '¿Está seguro que quiere eliminar la lista seleccionada?',
            buttons: ['Cancelar',
              {
                text: 'Eliminar',
                handler: () => {
                 // console.log('Agree clicked');
                 this._listaDeseos.delList(this.indice);
                 // regresar a la anterior pantalla
                 this.navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
    }

}
