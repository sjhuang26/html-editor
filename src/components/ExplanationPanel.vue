<!-- a panel that contains a visual and interactive representation of the code -->
<template>
  <CollapsiblePanel class="explanation-panel" panelName="explanation">
    <p class="lead">Try clicking on a tag!</p>
    <CssSelectorGroupExplanation/>
    <ExplanationNodeRoot :nodes="codeModel" :position="[]"/>
  </CollapsiblePanel>
</template>

<script>
import { mapGetters } from 'vuex';

import CssSelectorGroupExplanation from './CssSelectorGroupExplanation';
import ExplanationNodeRoot from './ExplanationNodeRoot';
import CollapsiblePanel from './CollapsiblePanel';
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
    CssSelectorGroupExplanation,
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
