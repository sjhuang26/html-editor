<!-- a panel that contains a visual and interactive representation of the code -->
<template>
  <div class="explanation-panel">
    <p class="lead">Try clicking on a tag!</p>
    <ExplanationNodeRoot :nodes="codeModel" :position="[]"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ExplanationNodeRoot from './ExplanationNodeRoot';
import SelectionPanel from './SelectionPanel';

export default {
  name: 'ExplanationPanel',
    props: {
      name: {
          title: 'Explanation',
          description: "TODO"
        }
    },
  components: {
    ExplanationNodeRoot,
    SelectionPanel
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
