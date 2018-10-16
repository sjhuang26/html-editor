<!-- a panel that contains help information about the current selection -->
<template>
  <CollapsiblePanel panelName="selection">
    <div v-if="selectionModel === null">
      <p>Nothing selected</p>
    </div>
    <div v-else-if="selectionModel.type === 'text'">
      <p class="lead">Text</p>
      <pre>{{ selectionModel.content }}</pre>
    </div>
    <div v-else>
      <p class="lead">{{ selectionModel.name }}</p>
      <p>{{ tags[selectionModel.name].description }}</p>
      <table v-if="selectionModel.attributes.length > 0" class="table">
        <thead>
          <tr>
            <th>Attribute name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(attr, index) of selectionModel.attributes" :key="'selection-attribute-' + index">
            <td>{{ attr.name }}</td>
            <td>{{ attr.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </CollapsiblePanel>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { tags } from '../help/help';
import CollapsiblePanel from './CollapsiblePanel';

export default {
  name: 'SelectionPanel',
  components: {
    CollapsiblePanel
  },
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
    // a common hack to transfer imported variables to Vue variables
    this.tags = tags;
  }
};
</script>
