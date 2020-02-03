import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/Shop/Shop.selectors';

import './Collection.scss';


const CollectionPage = ({ collection }) => {
    console.log("dfd", collection);
    return (
        <div className="collection-page">
            <h2>{collection.title}</h2>
            {
                collection.items.map(item => {
                    return <p>{item.name}</p>
                })
            }
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);