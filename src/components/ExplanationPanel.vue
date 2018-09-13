<!-- a panel that contains a visual and interactive representation of the code -->
<template>
  <div class="explanation-panel">
    <ExplanationNodeRoot :nodes="codeModel" :position="[]"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ExplanationNodeRoot from './ExplanationNodeRoot';

export default {
  name: 'ExplanationPanel',
  components: {
    ExplanationNodeRoot,
  },
  computed: {
    ...mapGetters([
      'codeModel'
    ])
  }
};
</script>

<style scoped>
</style>
