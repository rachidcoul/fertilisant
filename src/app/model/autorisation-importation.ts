import { ControleFrontiere } from "./controle-frontiere";

export class AutorisationImportation {
    
    constructor(
        public id?: number,
        public numero?: string,
        public libelle?: string,

        public controleFrontieres?: ControleFrontiere[]
        
    ) { }
}
