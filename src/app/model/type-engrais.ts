import { Echantillon } from "./echantillon";
import { ElementNutritif } from "./element-nutritif";

export class TypeEngrais {
    constructor(
        public id?: number,
        public libelle?: string,

        public echantillons?: Echantillon[],
        public elementNutritifs?: ElementNutritif[]
        
    ) { }
}
