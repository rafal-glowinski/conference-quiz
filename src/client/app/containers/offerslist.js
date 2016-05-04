import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadOffers, pageClicked, adGroupIdChanged } from '../actions/'
import OffersList from '../components/offerslist'

const mapStateToProps = (state) => {
  return {
    offersList: state.offers.offersList,
    offset: state.offers.offset,
    pageSize: state.offers.pageSize,
    adGroupId: state.offers.adGroupId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoadOffersButton: (offset, limit, adGroupId) => {
      dispatch(loadOffers(offset, limit, adGroupId))
    },

    onPageClicked: (newPage, limit, adGroupId) => {
      dispatch(loadOffers(newPage * limit, limit, adGroupId))
    },

    onAdGroupIdChanged: (adGroupId) => {
      dispatch(adGroupIdChanged(adGroupId))
    }
  }
}

const FilteredOffersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersList)

export default FilteredOffersList
