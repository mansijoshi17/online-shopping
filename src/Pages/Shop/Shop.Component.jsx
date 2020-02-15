import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../Component/Collection-overview/Collection-overview.component';
import CollectionPage from '../Collection/Collection.component';

import withSpinner from '../../Component/With-Spinner/WIth-spinner.component';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/Shop/Shop.action';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/Shop/Shop.selectors';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className="shop-page" >
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                )} />
                <Route path={`${match.path}/:collectionId`} render={props => (
                    <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
                )} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
})


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);