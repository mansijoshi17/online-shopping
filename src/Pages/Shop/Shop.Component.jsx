import React from 'react';
import SHOP_DATA from '../Shop/Shop.data';
import CollectionPreview from '../../Component/Preview-Collection/Collection-Preview.Component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const { collection } = this.state;
        return (
            <div className="shop-page">{
              collection.map(({id , ...otherCollectionProps}) => {
                 return <CollectionPreview key={id} {...otherCollectionProps}/>
              })
            }</div>
        )
    }
}

export default ShopPage;