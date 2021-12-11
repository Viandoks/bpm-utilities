export const state = () => ({
  bpm: 0,
  ms: 0,
  hz: 0,
})

export const mutations = {
  setBpm(state, value) {
    if(isNaN(parseFloat(value))) return
    state.bpm = parseFloat(value)
  },
  setMs(state, value) {
    if(isNaN(parseFloat(value))) return
    state.ms = parseFloat(value).toFixed(0)
  },
  setHz(state, value) {
    if(isNaN(parseFloat(value))) return
    state.hz = parseFloat(value).toFixed(0)
  },
}
