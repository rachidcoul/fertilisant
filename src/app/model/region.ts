import { Province } from "./province";

export class Region {
    constructor(
        //creer les attributs du meme nom que les attribut de lentité region dans le backend
        public id?: number,
        // les ?? pour montre
        public codeDgess?: string,
        public codeIgb?: string,
        public libelle?: string,
        
        public provinces?: Province[] //pour dire que cest une liste de province
    ) {

    }
}
