import 'whatwg-fetch';

export const loadOffers = (offset, limit, adGroupId) => {
  return dispatch => {
    dispatch(loadingOffers())

    var url = `http://mesos-slave1008.mesos-pd-test.pl-kra-3.dc4.local:31034/adgroups/${adGroupId}/inventory?offset=${offset}&limit=${limit}`

    return fetch(url)
            .then(function(response) {
              response.json().then(function(json) {
                dispatch(offersLoaded(json))
              })
            }, function(error) {
              dispatch(offersLoadingFailed(error))
            })
  }
}

export const pageClicked = (pageNum) => {
  return {
    type: 'PAGE_CLICKED',
    pageNum: pageNum
  }
}

export const loadingOffers = () => {
  return {
    type: 'LOADING_OFFERS'
  }
}

export const offersLoaded = (offersResult) => {
    return {
      type: 'OFFERS_LOADED',
      offersResult: offersResult
    }
}

export const offersLoadingFailed = (error) => {
    return {
      type: 'OFFERS_LOADING_FAILED',
      error: error
    }
}

export const adGroupIdChanged = (newAdGroupId) => {
  return {
    type: 'ADGROUP_ID_CHANGED',
    newAdGroupId: newAdGroupId
  }
}
