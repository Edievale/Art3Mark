import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from "../../app/classes/index";
import { AlertController, NavController, List } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string ='';
    nombreItem: string ='';
    
    items:ListaItem[]=[];


    constructor(public alertCtrl: AlertController,
                public navCtrl:NavController,
                public _listaDeseos:ListaDeseosService) { }

    ngOnInit(): void { }

    addItem(){
        if (this.nombreItem.length == 0) return;
        
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        
        item.completado = false;
        this.items.push(item);

        this.nombreItem = "";
    }

    delItem(index:number){
        this.items.splice(index,1);
    }

      guardarLista (){
        if (this.nombreLista.length == 0) {
        let alert = this.alertCtrl.create({
          title: '¡Atención!',
          subTitle: 'La lista debe tener un Nombre',
          buttons: ['OK']
         });
        alert.present();
         return;
        }

        let lista = new Lista (this.nombreLista);
        lista.items = this.items;
        this._listaDeseos.addList(lista);

        //volver a la pantalla anterior
        this.navCtrl.pop();
     }
}
