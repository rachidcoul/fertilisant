import { Resultat } from "./resultat";

export class Echantillon {
    constructor(
        public id?: number,
        public numInspection?: string,
        public numLabo?: string,
        public datePrelevement?: Date,
        public dateReception?: Date,
        public dateRapport?: Date,

        public resultats?: Resultat[]
        
    ) { }
}
