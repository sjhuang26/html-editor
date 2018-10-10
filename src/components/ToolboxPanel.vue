<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <CollapsiblePanel panelName="toolbox">
    <ul class="list-group">
      <li
        v-for="(tag, tagName) of tagHelp"
        class="list-group-item"
        :key="'toolbox-list-' + tagName"
      >
        <div class="d-flex justify-content-between">
          <h5>{{ tagName }}</h5>
          <button class="btn btn-outline-secondary" @click="addTag(tagName)">Add</button>
        </div>
        <p>{{ tag.description }}</p>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import CollapsiblePanel from './CollapsiblePanel';
import { tagHelp } from '../help/help';

export default {
  name: 'ToolboxPanel',
  components: {
    CollapsiblePanel
  },
  methods: {
    ...mapActions([
      'updateCode'
    ]),
    addTag(tagName) {
      const newCode = this.code + `<${tagName}>Stuff</${tagName}>`;
      this.updateCode(newCode);
    }
  },
  data() {
    return {
      tagHelp
    };
  },
  computed: {
    ...mapState([
      'code'
    ])
  }
};
</script>
