export module GatunekStali {

    export var GATUNKI_STALI = {
        RB_400: "RB_400",
        RB_500: "RB_500"
    }

    export var GATUNKI_STALI_PARAMETRY: Map<string, GatunekStaliParametry> = new Map();
    GATUNKI_STALI_PARAMETRY.set(GATUNKI_STALI.RB_400, { text: "RB400", fyk: 400 });
    GATUNKI_STALI_PARAMETRY.set(GATUNKI_STALI.RB_500, { text: "RB500", fyk: 500 });

    interface GatunekStaliParametry {
        text: string;
        fyk: number;
    }
}