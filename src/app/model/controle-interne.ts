import { Echantillon } from "./echantillon";

export class ControleInterne {
    constructor(
        public id?: number,
        public dateControle?: Date,

        public echantillons?: Echantillon[]
        
    ) { }
}
