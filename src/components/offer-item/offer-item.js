import './offer-item.sass';

function OfferItem({title, descr}) {
    return(
        <div className={title.toLowerCase().startsWith('arch') ? 'offer__item-arch' : 'offer__item'}>
            <div className="offer__item-wrapper">
                <div className={title.toLowerCase().startsWith('arch') ? 'offer__item-header header_arch' :
                                title.toLowerCase().startsWith('des') ? 'offer__item-header header_des' :
                                'offer__item-header header_plan'
                }>{title}</div>
                <div className="offer__item-descr">{descr}</div>
            </div>
        </div>
    )
}

export default OfferItem;