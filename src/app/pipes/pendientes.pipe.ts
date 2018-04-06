import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/listas';


@Pipe({
    name: 'pendientes',
    pure: false // Pipe impuro
})
export class PendientePipe implements PipeTransform {
    transform(listas: Lista[], bItemsPendientes:boolean=true): Lista[] {
        let listaAux :Lista[] = [];
        
       for (let lista of listas) {
           if (lista.terminado == !bItemsPendientes){
               listaAux.push(lista);
           }
       }

       return listaAux;
    }
}