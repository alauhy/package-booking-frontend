const toSetList = (state, list) => {

  state.packageList = list

}
const addToList = (state, event) => {
  state.packageList.push(event)
}

export default {
  toSetList,
  addToList,
}
