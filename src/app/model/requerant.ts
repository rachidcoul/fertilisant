import { AutorisationImportation } from "./autorisation-importation";
import { ControleInterne } from "./controle-interne";
import { DemandeAgrement } from "./demande-agrement";
import { RenouvellementAgrement } from "./renouvellement-agrement";

export class Requerant {

    constructor(
        public id?: number,
        public nomPrenom?: string,
        public cnib?: string,
        public contact?: string,
        public email?: string,
        public dateNaissance?: Date,

        public numRccm?: string,
        public numIfu?: string,

        public demandeAgrements?: DemandeAgrement[]
    ) { }
}
