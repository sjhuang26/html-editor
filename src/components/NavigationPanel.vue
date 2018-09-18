<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
  <div>
    <b-button class="btn" variant="success" @click="toggle('code')">Code</b-button>
    <b-button class="btn" variant="info" @click="toggle('explanation')">Explanation</b-button>
    <b-button class="btn" variant="warning" @click="toggle('website')">Website</b-button>
    <b-button class="btn" variant="primary" @click="toggle('selection')">Selection</b-button>
    <b-button class="btn" variant="danger" @click="toggle('toolbox')">Toolbox</b-button>
    <b-button class="btn" variant="link">Link(in progress)</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'updateVisiblePanels'
    ]),
    // toggle the visibility of a single panel
    toggle(panelName) {
      // this code manipulates an array containing names of all the visible panels
      if (this.visiblePanels.includes(panelName)) {
        // remove panel
        this.updateVisiblePanels(this.visiblePanels.filter((value) => (value !== panelName)));
      } else {
        // add panel
        this.updateVisiblePanels(this.visiblePanels.concat(panelName));
      }
    }
  },
  computed: {
    ...mapState([
      'visiblePanels'
    ])
  }
};
</script>

<style>
  .btn
  {
    margin-right: 16px;
    margin-bottom: 6px !important;
  }
</style>