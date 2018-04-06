import { Injectable } from '@angular/core';
import { Lista } from "../classes/listas";

@Injectable()
export class ListaDeseosService {

    listas:Lista[] = [];

    constructor(){
        this.loadData();
    }

    updateData () {
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    loadData(){
        if (localStorage.getItem("data"))
            this.listas = JSON.parse(localStorage.getItem("data"));
    }

    addList(lista:Lista){
        this.listas.push(lista);
        this.updateData();
    }

    delList (indice:number){
        this.listas.splice(indice,1);
        this.updateData();
    }
}