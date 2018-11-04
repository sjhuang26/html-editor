<template>
  <div>
    <p class="lead">CSS selector</p>
    <input type="text" class="form-control" :value="cssCode" @input="updateCssCode($event.target.value)"/>
    <p class="lead">Meaning</p>
    <CssSelectorGroupExplanation />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import CssSelectorGroupExplanation from './CssSelectorGroupExplanation';

export default {
  name: 'CssPanel',
  components: {
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
