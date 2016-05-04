import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper';
import ReactPaginate from 'react-paginate';
import Offer from './offer';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button'

const makeThumbnailUrl = (originalUrl) => (
  originalUrl.replace('/original/', '/s128/')
)

const OffersList = ({offersList, offset, pageSize, adGroupId, onLoadOffersButton, onPageClicked, onAdGroupIdChanged}) => {
  var rows = offersList.units.map(
    function(offer) {
      return (
          <div id="offerRow">
            <Paper zDepth={1}>
                <Offer
                    id={offer.model.offerId}
                    title={offer.title}
                    imageUrl={makeThumbnailUrl(offer.imageUrl)}
                    price={offer.model.price.amount}
                    currency={offer.model.price.currency} />
            </Paper>
          </div>
      )
  })

  return (
    <div id="offers">
      <TextField floatingLabelText="AdGroup ID" value={adGroupId} onChange={(event) => onAdGroupIdChanged(event.target.value)}/>
      <RaisedButton label="Load data!!" onClick={(event) => onLoadOffersButton(offset, pageSize, adGroupId)} />

      <div>{rows}</div>

      <Paper zDepth={1}>
        <nav id="project-pagination">
          <ReactPaginate clickCallback={(event) => onPageClicked(event.selected, pageSize, adGroupId)}
                         previousLabel={<span class="prev">Previous</span>}
                         nextLabel={<span class="prev">Next</span>}
                         breakLabel={<span class="ellipsis">...</span>}
                         pageNum={offersList.pageNum}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5} />
                         </nav>
     </Paper>
    </div>
  )
}

OffersList.propTypes = {
  offersList: PropTypes.shape({
    pageNum: PropTypes.number,
    units: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      model: PropTypes.shape({
        offerId: PropTypes.string.isRequired,
        price: PropTypes.shape({
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired).isRequired
  }).isRequired
}

export default OffersList
