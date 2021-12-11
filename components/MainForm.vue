<template>
  <form class="main-form">
    <input class="input-bpm" type="text" v-model="bpm">BPM
    <input class="input-ms" type="text" v-model="ms">ms
    <input class="input-hz" type="text" v-model="hz">Hz
  </form>
</template>

<script>
  export default {
    name: "MainForm",
    mounted() {
      this.bpm = 120
    },
    computed: {
      bpm: {
        get() {
          return this.$store.state.bpm;
        },
        set(newBpm) {
          this.$store.commit('setBpm', newBpm)
          this.$store.commit('setMs', this.calcMsFromBpm(this.bpm))
          this.$store.commit('setHz', this.calcHzFromMs(this.ms))
        }
      },
      ms: {
        get() {
          return this.$store.state.ms;
        },
        set(newMs) {
          this.$store.commit('setMs', newMs)
          this.$store.commit('setHz', this.calcHzFromMs(this.ms))
          this.$store.commit('setBpm', this.calcBpmFromMs(this.ms))
        }
      },
      hz: {
        get() {
          return this.$store.state.hz
        },
        set(newHz) {
          this.$store.commit('setHz', newHz)
          this.$store.commit('setMs', this.calcMsFromHz(this.hz))
          this.$store.commit('setBpm', this.calcBpmFromMs(this.ms))
        }
      },
      labelHz() {
        return this.$store.state.labelHz
      }
    },
    methods: {
      calcMsFromBpm(bpm) {
        return (1000 / 60 * bpm)
      },
      calcHzFromMs(ms) {
        return ms / 1000
      },
      calcBpmFromMs(ms) {
        return (ms * 60 / 1000)
      },
      calcMsFromHz(hz) {
        return hz * 1000
      }
    }
  }
</script>

<style scoped>

</style>
