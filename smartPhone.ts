import { Console } from "console";
import { Telefono } from "./interfazTelefono";

export class SmartPhone implements Telefono {
private estaPrendido: boolean;
constructor() {
   this.estaPrendido = false;
    }
    prender(): void {
        if (this.estaPrendido == false){
            this.estaPrendido = true;
        }
    }
    apagar(): void {
        if (this.estaPrendido == true){
            this.estaPrendido = false;
        }
    }
    llamar(numero: number): void {
        console.log("llamando a: ", numero);
    }
    sacarFoto(): void {
        console.log("sacando foto");
    }
}


