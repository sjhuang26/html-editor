<!-- a panel that contains a visual and interactive representation of the code -->
<template>
  <CollapsiblePanel class="explanation-panel" panelName="explanation">
    <p class="lead">Try clicking on a tag!</p>
    <ExplanationNodeRoot :nodes="codeModel" :position="[]"/>
  </CollapsiblePanel>
</template>

<script>
import { mapGetters } from 'vuex';

import ExplanationNodeRoot from './ExplanationNodeRoot';
import CollapsiblePanel from './CollapsiblePanel';
import SelectionPanel from './SelectionPanel';

export default {
  name: 'ExplanationPanel',
  components: {
    ExplanationNodeRoot,
    CollapsiblePanel,
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
