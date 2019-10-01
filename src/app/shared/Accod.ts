export class Accod {
    date: String;
    dateType: String;
    age: String;
    sex: String;
    race: String;
    residenceCity: String;
    residenceCounty: String;
    residenceState: String;
    deathCity: String;
    deathCounty: String;
    location: String;
    locationifOther: String;
    descriptionofInjury: String;
    injuryPlace: String;
    injuryCity: String;
    injuryCounty: String;
    injuryState: String;
    COD: String;
    otherSignifican: String;
    heroin: String;
    cocaine: String;
    fentanyl: String;
    fentanylAnalogue: String;
    oxycodone: String;
    oxymorphone: String;
    ethanol: String;
    hydrocodone: String;
    benzodiazepine: String;
    methadone: String;
    amphet: String;
    tramad: String;
    morphineNotHeroin: String;
    hydromorphone: String;
    other: String;
    opiateNOS: String;
    anyOpioid: String;
    mannerofDeath: String;
    deathCityGeo: {
        address: {
            street: String;
            city: String;
            state: String;
            zip: String
        };
        latitude: String;
        longitude: String
    };
    residenceCityGeo: {
        address: {
            street: String;
            city: String;
            state: String;
            zip: String
        };
        latitude: String;
        longitude: String
    };
    injuryCityGeo:  {
        address: {
            street: String;
            city: String;
            state: String;
            zip: String
        };
        latitude: String;
        longitude: String
    };
    townIndex: String
}