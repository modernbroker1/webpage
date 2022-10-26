export interface ContentData {
    obiekties: RentalPropertyGroup[],
}

export interface RentalPropertyGroup {
    id: string,
    obiekty: RentalPropertyData[],
    email: string,
    krotkiOpis: string,
    nazwaFirmy: string,
    nip: string,
    opisOsoby: string,
    opisOsobyTytul: string,
    telefon: string,
    zdjecieOsoby: {
        mimeType: string,
        url: string
    }
}

export interface RentalPropertyData {
    cena: string,
    id: string,
    lokalizacja: string,
    opis: {
        html: string
    },
    tagi: string[],
    tytul: string,
    zdjecia: Photo[]
}

export interface Photo {
    url: string,
    mimeType: string
}
