<!-- the root node of the explanation panel -->
<template>
  <span>
    <!-- basically a bunch of ExplanationNode components concatenated together -->
    <ExplanationNode
      v-for="(node, index) in nodes"
      :key="'explanation-node-' + JSON.stringify(position.concat(index))"
      :position="position.concat(index)"
      :node="node"
      :selection="selection"
      @selection="updateSelection"
    />
  </span>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ExplanationNode from './ExplanationNode';

export default {
  name: 'ExplanationNodeRoot',
  components: {
    ExplanationNode
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    position: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState([
      'selection'
    ])
  },
  methods: {
    ...mapActions([
      'updateSelection'
    ])
  }
};
</script>
