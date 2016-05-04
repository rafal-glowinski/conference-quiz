import { combineReducers } from 'redux'

const initialState = {
  offersList: {
    pageNum: 0,
    units: []
  },
  offset: 0,
  pageSize: 25,
  adGroupId: '56fd82f060b2f505bd359609'
}

const offers = (state = initialState, action) => {
  switch (action.type) {
    case 'OFFERS_LOADED':
      return Object.assign({}, state, {
        offersList: action.offersResult,
        offset: action.offersResult.offset
      })

    case 'ADGROUP_ID_CHANGED':
      return Object.assign({}, state, {
        adGroupId: action.newAdGroupId
      })

    default:
      return state
  }
}

const offersApp = combineReducers({
  offers
})

export default offersApp
