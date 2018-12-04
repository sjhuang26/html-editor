<!-- a panel that contains a visual and interactive representation of the code -->
<template>
  <div class="explanation-panel">
    <div v-show="codeIsBlank" class="alert alert-primary">
      You haven't entered any code.
    </div>
    <ExplanationNodeRoot v-show="!codeIsBlank" :nodes="codeModel" :position="[]"/>
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
      'codeModel',
      'codeIsBlank'
    ])
  }
};
</script>

<style scoped>
.explanation-panel {
  padding: 1rem;
}
</style>
