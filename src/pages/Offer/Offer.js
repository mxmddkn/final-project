import './offer.sass'
import data from '../../assets/data.json';
import OfferItem from '../../components/offer-item/offer-item';
import { useState } from 'react';
function Offer() {
    const elements = data.loans.map(item => {
        const {id, ...itemProps} = item;
        return (
            <OfferItem key={id} {...itemProps}/>
        )
    });

    const elementsByTitle = elements.filter(item => item.props.title.toLowerCase().startsWith('arc'));
    const elementsByTitle2 = elements.filter(item => item.props.title.toLowerCase().startsWith('pla'));
    const elementsByTitle3 = elements.filter(item => item.props.title.toLowerCase().startsWith('inter'));
    const elementsAll = elementsByTitle3.slice(0, 1).concat(elementsByTitle.slice(0, 1), elementsByTitle2.slice(0, 1));
    const [activeButton, setActiveButton] = useState('all');
    function handleClick(event) {
      setActiveButton(event.target.id);
    }
    return(
        <div className="offer">
            <div className="container">
                <div className="offer__preheader">What we do</div>
                <h2 className="offer__header">Our Service</h2>
                <div className="offer__buttons">
                    <button id='all' onClick={handleClick} className={ activeButton==='all'? "offer__button-clicked" : "offer__button"}>ALL</button>
                    <button id ='design' onClick={handleClick} className={activeButton==='design' ? "offer__button-clicked" : "offer__button"}>INTERIOR DESIGN</button>
                    <button id="architecture" onClick={handleClick} className={ activeButton==='architecture'? "offer__button-clicked" : "offer__button"}>ARCHITECTURE</button>
                    <button id="planning" onClick={handleClick} className={activeButton==='planning' ? "offer__button-clicked" : "offer__button"}>PLANNING</button>
                </div >
                {activeButton === 'all' && (
                    <div className='offer__wrapper'>{elementsAll}</div>
                )}
                {activeButton === 'architecture' && (
                    <div className='offer__wrapper'>{elementsByTitle}</div>
                )}
                {activeButton === 'planning' && (
                    <div className='offer__wrapper'>{elementsByTitle2}</div>
                )}
                {activeButton === 'design' && (
                    <div className='offer__wrapper'>{elementsByTitle3}</div>
                )}
            </div>
        </div>
    )
}


export default Offer;