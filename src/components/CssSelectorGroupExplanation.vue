<template>
  <div v-if="cssModel.length === 0">
    <p>No CSS selector</p>
  </div>
  <div v-else-if="cssModel.length === 1">
    <CssSelectorExplanation :selector="cssModel[0]"/>
  </div>
  <div v-else>
    <p>All the elements that are either ...</p>
    <CssSelectorExplanation v-for="selector of cssModel" :key="JSON.stringify(selector)" :selector="selector"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CssSelectorExplanation from './CssSelectorExplanation';

export default {
  name: 'CssSelectorGroupExplanation',
  components: {
    CssSelectorExplanation
  },
  computed: {
    ...mapGetters([
      'cssModel'
    ])
  }
};
</script>
