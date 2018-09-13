<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
  <div>
    <button @click="toggle('code')">Code</button>
    <button @click="toggle('explanation')">Explanation</button>
    <button @click="toggle('website')">Website</button>
    <button @click="toggle('selection')">Selection</button>
    <button @click="toggle('toolbox')">Toolbox</button>
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
