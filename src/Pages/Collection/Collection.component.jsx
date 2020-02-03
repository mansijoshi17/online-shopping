import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../Component/Collection-item/Collection-item.component';

import { selectCollection } from '../../redux/Shop/Shop.selectors';

import './Collection.scss';


const CollectionPage = ({ collection }) => {
    console.log("dfd",collection.items);
    return (
        <div className="collection-page">
            <h2>COLLECTION PAGE</h2>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
   collection :  selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);