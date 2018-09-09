<template>
  <span>
    <ExplanationNode v-for="node in nodes" :key="JSON.stringify(node)" :node="node" />
  </span>
</template>

<script>
import ExplanationNode from './ExplanationNode';

export default {
  name: 'ExplanationNodeCollection',
  components: {
    ExplanationNode
  },
  props: {
    nodes: {
      type: Array,
      required: true
    }
  }
};
</script>
