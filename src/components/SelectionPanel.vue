<template>
  <div>
    <div v-if="selectionModel === null">
      <p>Nothing selected</p>
    </div>
    <div v-else-if="selectionModel.type === 'text'">
      <h3>Text</h3>
      <p>Content: <pre>{{ selectionModel.content }}</pre></p>
    </div>
    <div v-else>
      <h3>Tag</h3>
      <p>Name: <pre>{{ selectionModel.name }}</pre></p>
      <p>{{ tagHelp[selectionModel.name].title }}</p>
      <p>{{ tagHelp[selectionModel.name].description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { tagHelp } from '../help/help';

export default {
  name: 'SelectionPanel',
  computed: {
    ...mapState([
      'selection'
    ]),
    ...mapGetters([
      'codeModel',
      'selectionModel'
    ])
  },
  created() {
    this.tagHelp = tagHelp;
  }
};
</script>
