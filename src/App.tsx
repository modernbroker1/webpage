import {useEffect, useState} from "react";
import {ContentData} from "./interface";
import {Content} from "./Content";
import request, {GraphQLClient} from "graphql-request";

export function App() {

    const client = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9q0idbl0egx01t53ytccmmn/master", { headers: {} })

    const [data, setData] = useState<ContentData | null | undefined>()

    useEffect(() => {
        const fetchData = async () => {
            const query = "query Obiekties {\n" +
                "  obiekties(first: 1, orderBy: publishedAt_DESC) {\n" +
                "    createdAt\n" +
                "    id\n" +
                "    publishedAt\n" +
                "    updatedAt\n" +
                "    obiekty {\n" +
                "      cena\n" +
                "      id\n" +
                "      lokalizacja\n" +
                "      opis {\n" +
                "        html\n" +
                "      }\n" +
                "      tagi\n" +
                "      tytul\n" +
                "      zdjecia {\n" +
                "        url\n" +
                "        mimeType\n" +
                "      }\n" +
                "    }\n" +
                "    email\n" +
                "    krotkiOpis\n" +
                "    nazwaFirmy\n" +
                "    nip\n" +
                "    opisOsoby\n" +
                "    opisOsobyTytul\n" +
                "    telefon\n" +
                "    zdjecieOsoby {\n" +
                "      mimeType\n" +
                "      url\n" +
                "    }\n" +
                "  }\n" +
                "}\n"

            try {
                const result = await client.request(query)
                console.log(result)
                setData(result)
            } catch (e) {
                setData(null)
            }
        }
        fetchData()
    }, [])

    if (data === undefined) {
        return <div/>
    } else if (data === null) {
        return <h1>Problem occured</h1>
    } else {
        return <Content { ...data.obiekties[0] }/>;
    }


}