<template>
  <button
    class="btn btn-primary"
    :class="{active: tab === currentHelpPanelTab}"
    @click="setCurrentHelpPanelTab(tab)"
  >
    {{ tab }}
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'NavigationPanelButton',
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState([
      'currentHelpPanelTab'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentHelpPanelTab'
    ])
  }
};
</script>