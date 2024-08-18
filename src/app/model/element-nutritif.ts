import { Resultat } from "./resultat";

export class ElementNutritif {
    constructor(
        public id?: number,
        public libelle?: string,

        public resultats?: Resultat[]
        
    ) { }
}
