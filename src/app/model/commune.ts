import { Requerant } from "./requerant";

export class Commune {
    
        constructor(
            public id?: number,
            public codeDgess?: string,
            public codeIgb?: string,
            public libelle?: string,
            
            public requerants?: Requerant[]

        ) { }
}
