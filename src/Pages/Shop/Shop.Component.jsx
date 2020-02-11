import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../Component/Collection-overview/Collection-overview.component';
import CollectionPage from '../Collection/Collection.component';

import withSpinner from '../../Component/With-Spinner/WIth-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/Firebase';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/Shop/Shop.action';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


class ShopPage extends React.Component {

    state = {
        Loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');


        // fetch('https://firestore.googleapis.com/v1/projects/crwn-database-87c16/databases/(default)/documents/collections')
        //     .then(Response =>  Response.json() )
        //     .then(collections => console.log(collections));   //get firbase data using REST API Call.

        collectionRef.get().then(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ Loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { Loading } = this.state;
        return (
            <div className="shop-page" >
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithSpinner isLoading={Loading} {...props} />
                )} />
                <Route path={`${match.path}/:collectionId`} render={props => (
                    <CollectionPageWithSpinner isLoading={Loading} {...props} />
                )} />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);