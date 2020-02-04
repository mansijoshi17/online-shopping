import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/Shop/Shop.selectors';

import './Collection.scss';
import CollectionItemComponent from '../../Component/Collection-item/Collection-item.component';


const CollectionPage = ({ collection }) => {
    const { title , items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => {
                       return <CollectionItemComponent key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);