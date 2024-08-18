import { AutorisationImportation } from "./autorisation-importation";
import { ControleInterne } from "./controle-interne";
import { RenouvellementAgrement } from "./renouvellement-agrement";

export class DemandeAgrement {
    constructor(
        public id?: number,
        public codeAgrement?: string,
        public activite?: string,
        public dateDemande?: Date,
        public validationProvince?: string, //le ramener a boolean apres resolution du pro
        public dateValidationProvince?: Date,
        public validationRegion?: string, //le ramener a boolean apres resolution du pro
        public dateValidationRegion?: Date,
        public validationCentral?: string, //le ramener a boolean apres resolution du pro
        public dateValidationCentral?: Date,

        public controleInternes?: ControleInterne[],// se rassurer au pret de SOME sur la presence de controlInterne dans DemAgr
        public renouvellementAgrements?: RenouvellementAgrement[],
        public autorisationImportations?: AutorisationImportation[]

    ) { }
}
