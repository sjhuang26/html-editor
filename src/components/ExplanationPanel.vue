<template>
  <div class="explanation-panel">
    <ExplanationNodeRoot :nodes="codeModel" :position="[]"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

//import ExplanationNode from './ExplanationNode';
import ExplanationNodeRoot from './ExplanationNodeRoot';

export default {
  name: 'ExplanationPanel',
  components: {
    ExplanationNodeRoot,
    //ExplanationNode
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
