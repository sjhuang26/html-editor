<template>
  <pre class="explanation-node-text" v-if="node.type === 'text'">{{ node.content }}</pre>
  <div v-else>
    <div class="explanation-node-tag">
      &lt;<pre class="explanation-node-tag-name">{{ node.name }}</pre>&gt;
    </div>
    <ExplanationNode v-for="child in node.children" :key="JSON.stringify(child)" :node="child" />
    <div class="explanation-node-tag">
      &lt;/<pre class="explanation-node-tag-name">{{ node.name }}</pre>&gt;
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExplanationNode',
  props: {
    node: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.explanation-node-text {
  color: darkgray;
}
.explanation-node-tag {
  color: green;
}
.explanation-node-tag-name {
  color: blue;
}
div, pre {
  display: inline;
}
</style>
