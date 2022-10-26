import {RentalPropertyData} from "./interface";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import {useState} from "react";
import * as Truncate from "html-truncate"

export function RentalProperty(data: RentalPropertyData) {

    const [showMore, setShowMore] = useState(false);

    const images = data.zdjecia.map(photo => {
        return {
            original: photo.url,
            thumbnail: photo.url,
        }
    })

    const description = (() => {
        if (showMore) {
            return data.opis.html
        } else {
            return Truncate(data.opis.html, 500)
        }
    })()

    console.log("### " + data.tagi)

    return <div className="row gx-0 mb-4 mb-lg-5">
        <div className="col-lg-5">
            <ImageGallery items={ images } showThumbnails={ true } showPlayButton={ false }/>
        </div>
        <div className="col-lg-7">
            <div className="featured-text text-center text-lg-left">
                <h4>{ data.tytul }</h4>
                <h4>Cena: { data.cena }</h4>
                <h4>Lokalizacja: { data.lokalizacja }</h4>
                <div style={{display: "flex", justifyContent: "left"}}>
                    { data.tagi.map(tag => {
                        return <div style={ { display: 'inline-block', padding: '5px', margin: "10px", border: 'black solid' } }>{ tag }</div>
                    }) }
                </div>
                <div dangerouslySetInnerHTML={ { __html: description } }/>
                <button className="btn"
                        onClick={ () => setShowMore(!showMore) }>{ showMore ? 'Pokaż mniej' : 'Pokaż więcej' }</button>
            </div>
        </div>
    </div>
}