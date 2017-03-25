export module KlasaBetonu {

    export var KLASY_BETONU = {
        C12_15: "C12_15",
        C16_20: "C16_20",
        C20_25: "C20_25",
        C25_30: "C25_30",
        C30_37: "C30_37",
        C35_45: "C35_45",
        C40_50: "C40_50",
        C45_55: "C45_55",
        C50_60: "C50_60"
    }

    export var KLASY_BETONU_PARAMETRY: Map<string, KlasaBetonuParametry> = new Map();
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C12_15, { text: "C12/15", fck: 12 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C16_20, { text: "C16/20", fck: 16 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C20_25, { text: "C20/25", fck: 20 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C25_30, { text: "C25/30", fck: 25 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C30_37, { text: "C30/37", fck: 30 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C35_45, { text: "C35/45", fck: 35 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C40_50, { text: "C40/50", fck: 40 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C45_55, { text: "C45/55", fck: 45 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C50_60, { text: "C50/60", fck: 50 });

}

interface KlasaBetonuParametry {
    text: string;
    fck: number;
}