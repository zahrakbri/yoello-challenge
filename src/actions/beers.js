import axios from 'axios'

export const GET_DATA_BEGIN = 'GET_DATA_BEGIN'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'

export const GET_DATA_WITH_FILTER_BEGIN = 'GET_DATA_WITH_FILTER_BEGIN'
export const GET_DATA_WITH_FILTER_SUCCESS = 'GET_DATA_WITH_FILTER_SUCCESS'
export const GET_DATA_WITH_FILTER_FAILURE = 'GET_DATA_WITH_FILTER_FAILURE'

export const getDataBegin = () => ({
  type: GET_DATA_BEGIN
})

export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data
})

export const getDataFailure = error => ({
  type: GET_DATA_FAILURE,
  payload: { error }
})

export function getData () {
  return dispatch => {
    dispatch(getDataBegin())
    return axios.get('https://api.punkapi.com/v2/beers')
      .then(function (response) {
        dispatch(getDataSuccess(response.data))
      })
      .catch(error => {
        dispatch(getDataFailure(error))
      })
  }
}

export const filterDataBegin = () => ({
  type: GET_DATA_WITH_FILTER_BEGIN
})

export const filterDataSuccess = data => ({
  type: GET_DATA_WITH_FILTER_SUCCESS,
  payload: data
})

export const filterDataFailure = error => ({
  type: GET_DATA_WITH_FILTER_FAILURE,
  payload: { error }
})

export function filterData (filter) {
  return dispatch => {
    dispatch(getDataBegin())
    return axios.get('https://api.punkapi.com/v2/beers', {
      params: filter
    })
      .then(function (response) {
        dispatch(getDataSuccess(response.data))
      })
      .catch(error => {
        dispatch(getDataFailure(error))
      })
  }
}