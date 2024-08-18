import { Commune } from "./commune";

export class Province {

        constructor(
            public id?: number,
            public codeDgess?: string,
            public codeIgb?: string,
            public libelle?: string,
            
            public communes?: Commune[]

        ) { }
}
