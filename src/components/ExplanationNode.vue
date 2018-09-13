<!-- a node in the explanation panel -->
<template>
  <!-- whitespace is particularly important here, so this code is a mess -->
  <div class="explanation-node" ref="explanationNode" :class="{ 'explanation-node-selected': isSelected}">
    <pre class="explanation-node-text" v-if="node.type === 'text'" :title="getInlineTextHelp()">{{ node.content }}</pre>
    <div v-else>
      <div class="explanation-node-tag" :title="getInlineTagHelp(node.name)">
        &lt;<pre class="explanation-node-tag-name">{{ node.name }}</pre>
        <pre
          v-for="attribute of node.attributes"
          :key="'attribute-' + attribute.name + '=' + attribute.value"
        >{{ ' ' + attribute.name + '=' + attribute.value }}</pre>&gt;
      </div>
      <!-- recursive component!! ExplanationNode inside ExplanationNode -->
      <ExplanationNode
        v-for="(child, index) in node.children"
        :key="'explanation-node-' + JSON.stringify(position.concat(index))"
        :node="child"
        :position="position.concat(index)"
        :selection="selection"
        @selection="handleSelection"
      />
      <div class="explanation-node-tag" :title="getInlineTagHelp(node.name)">
        &lt;/<pre class="explanation-node-tag-name">{{ node.name }}</pre>&gt;
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

import { getInlineTagHelp, getInlineTextHelp } from '../help/help';

export default {
  name: 'ExplanationNode',
  props: {
    node: {
      type: Object,
      required: true
    },
    position: {
      type: Array,
      required: true
    },
    selection: {
      type: Array,
      required: true
    }
  },
  methods: {
    getInlineTagHelp,
    getInlineTextHelp,
    handleSelection(newSelection) {
      this.$emit('selection', newSelection);
    }
  },
  computed: {
    isSelected() {
      return JSON.stringify(this.selection) === JSON.stringify(this.position);
    }
  },
  mounted() {
    const node = this.$refs.explanationNode;
    // jQuery hacks to make hover and click work properly
    $(node).on('mouseover mouseout', (e) => {
      $(node).toggleClass('explanation-node-hovered', e.type ==='mouseover');
      e.stopPropagation();
    });
    $(node).on('click', (e) => {
      this.$emit('selection', this.position);
      e.stopPropagation();
    });
  }
};
</script>

<style scoped>
.explanation-node {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  transition: background-color 0.1s;
}
.explanation-node-text {
  color: darkgray;
}
.explanation-node-tag {
  color: green;
}
.explanation-node-tag-name {
  color: blue;
}
.explanation-node-selected {
  background-color: #0AA;
}
.explanation-node-hovered,
.explanation-node-hovered .explanation-node-selected {
  background-color: #0EE;
}
div, pre {
  display: inline;
}
</style>
