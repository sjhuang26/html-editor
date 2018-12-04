<!-- a panel that contains help information about the current selection -->
<template>
  <div>
    <div v-if="selectionModel === null">
      <div class="alert alert-primary">
        <p>Click on a part of the code in the explanation to learn more about it.</p>
      </div>
    </div>
    <div v-else-if="selectionModel.type === 'text'">
      <p class="lead">Text</p>
      <pre>{{ selectionModel.content }}</pre>
    </div>
    <div v-else>
      <p class="lead">{{ selectionModel.name }}</p>
      <ReferenceTag :tag="selectionModel.name" />
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import { tags } from '../js/help';

import ReferenceTag from './ReferenceTag';

export default {
  name: 'SelectionPanel',
  components: {
    ReferenceTag
  },
  props: {
    name: {
      title: 'Selection',
      description: "TODO"
    }
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
