import axios from 'axios'

const getNotFetch = ({ commit }) => {
  axios.get('http://localhost:8080/packages/1')
    .then(res => {
      commit('toSetList', res.data)
    }).catch(error => console.log(error))
}
const getBooked = ({ commit }) => {
  axios.get('http://localhost:8080/packages/2')
    .then(res => {
      commit('toSetList', res.data)
    }).catch(error => console.log(error))
}
const getFetched = ({ commit }) => {
  axios.get('http://localhost:8080/packages/3')
    .then(res => {
      commit('toSetList', res.data)
    }).catch(error => console.log(error))
}
const getList = ({ commit }) => {
  axios.get('http://localhost:8080/packages')
    .then(res => {
      commit('toSetList', res.data)
    }).catch(error => console.log(error))
}
const addPackage = ({ dispatch }, pkg) => {
  axios.post('http://localhost:8080/packages', pkg)
    .then(res => {
      dispatch('getList')
    }).catch(error => console.log(error))
}
const setStatusFetched = ({ dispatch, state }, id) => {
  debugger
  let pkg = state.packageList.find(n => n.id === id)
  pkg.status = 3
  axios.put(`http://localhost:8080/packages/${id}`, pkg)
    .then(res => {
      dispatch('getList')
    }).catch(error => console.log(error))
}
const setStatusUnfetch = ({ dispatch, state }, pkg1) => {
  let pkg = {
    status: 2,
    orderId:pkg1.orderId,
    bookTime: pkg1.bookTime
  }

  axios.put(`http://localhost:8080/packages/`, pkg)
    .then(res => {
      dispatch('getList')
    }).catch(error => console.log(error))
}
export default {
  getList,
  getBooked,
  getFetched,
  getNotFetch,
  addPackage,
  setStatusFetched,
  setStatusUnfetch

}
