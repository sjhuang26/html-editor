<template>
  <CollapsiblePanel panelName="css">
    <p class="lead">CSS selector</p>
    <input type="text" class="form-control" :value="cssCode" @input="updateCssCode($event.target.value)"/>
    <p class="lead">Meaning</p>
    <CssSelectorGroupExplanation />
  </CollapsiblePanel>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import CollapsiblePanel from './CollapsiblePanel';
import CssSelectorGroupExplanation from './CssSelectorGroupExplanation';

export default {
  name: 'CssPanel',
  components: {
    CollapsiblePanel,
    CssSelectorGroupExplanation
  },
  methods: {
    ...mapActions([
      'updateCssCode'
    ])
  },
  computed: {
    ...mapState([
      'cssCode'
    ])
  }
};
</script>
