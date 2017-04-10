import { Component } from '@angular/core';

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
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C12_15, { text: "C12/15", fck: 12, fctm: 1.6 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C16_20, { text: "C16/20", fck: 16, fctm: 1.9 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C20_25, { text: "C20/25", fck: 20, fctm: 2.2 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C25_30, { text: "C25/30", fck: 25, fctm: 2.6 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C30_37, { text: "C30/37", fck: 30, fctm: 2.9 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C35_45, { text: "C35/45", fck: 35, fctm: 3.2 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C40_50, { text: "C40/50", fck: 40, fctm: 3.5 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C45_55, { text: "C45/55", fck: 45, fctm: 3.8 });
    KLASY_BETONU_PARAMETRY.set(KLASY_BETONU.C50_60, { text: "C50/60", fck: 50, fctm: 4.1 });

}

interface KlasaBetonuParametry {
    text: string;
    fck: number;
    fctm: number;
}