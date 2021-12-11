<template>
  <div id="main">
    <MainForm />
    <TheResults />
  </div>
</template>

<script>
  import MainForm from "../components/MainForm";
  import TheResults from "../components/TheResults";
export default {
  components: {MainForm, TheResults}
}
</script>
