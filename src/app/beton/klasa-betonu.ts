export module KlasaBetonu {

    export var KLASY_BETONU = {
        C12_15 : "C12_15",
        C16_20 : "C16_20",
        C20_25 : "C20_25"

    }

    export var KLASY_BETONU_PARAMETRY:Map<string, KlasaBetonuParametry> = new Map();
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C12_15, {text:"C12/15", fck:12});
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C16_20, {text:"C16/20", fck:16});
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C20_25, {text:"C20/25", fck:20});



}

interface KlasaBetonuParametry {
    text: string;
    fck:number;
}