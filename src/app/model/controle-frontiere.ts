export class ControleFrontiere {
    
    constructor(
        public id?: number,
        public dateControle?: Date,
        public conformiteDocument?: boolean,
        public typeEntreeSortie?: string,
        public quantite?: number,
        public quantiteInterieur?: number,
        public quantiteExterieur?: number
        
    ) { }
}
