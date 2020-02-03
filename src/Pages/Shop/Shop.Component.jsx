import React from 'react';
import CollectionPreview from '../../Component/Preview-Collection/Collection-Preview.Component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShopCollections} from '../../redux/Shop/Shop.selectors';

const ShopPage = ({ collections }) => (
    <div className="shop-page" > {
        collections.map(({ id, ...otherCollectionProps }) => {
            return <CollectionPreview key={id} {...otherCollectionProps} />
        })
    }</div>
)


const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);