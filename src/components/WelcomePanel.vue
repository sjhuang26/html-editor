<template>
  <div class="jumbotron welcome">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">This website will teach you HTML, a programming language used to make websites.</p>
    <h2>What makes this different from other tutorials?</h2>
    <p class="lead"><mark>Interactive line-by-line explanations are shown for any code you enter.</mark> Try it by clicking "show explanation" in the code editor.</p>
    <hr class="my-4">
    <p class="lead">Pick something to do from the menu at the top.</p>
    <button class="btn btn-dark" @click="setCurrentHelpPanelTab('Tutorial')">Or, go to the tutorial</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'WelcomePanel',
  methods: {
    ...mapMutations([
      'setCurrentHelpPanelTab'
    ])
  }
};
</script>

<style lang="scss" scoped>
.welcome {
  background: linear-gradient(135deg, rgba($primary, 0.3), rgba($primary, 0.5));
}
</style>