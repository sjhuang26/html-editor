<!-- a node in the explanation panel -->
<template>
  <!-- whitespace is particularly important here, so this code is a mess -->
  <div
    class="explanation-node"
    ref="explanationNode"
    :class="{ 'explanation-node-selected': isSelected }"
  >
    <div
      class="explanation-node-text"
      v-if="node.type === 'text'"
    >{{ node.content }}</div>
    <div v-else>
      <div class="explanation-node-tag">
        &lt;<span class="explanation-node-tag-name">{{ node.name }}</span>
        <span
          v-for="attribute of node.attributes"
          :key="'attribute-' + attribute.name + '=' + attribute.value"
        >{{ ' ' + attribute.name + '=' + attribute.value }}</span>&gt;
        <i>{{ getInlineTagHelp(node.name) }}</i>
      </div>
      <!-- recursive component!! ExplanationNode inside ExplanationNode -->
      <div style="padding-left: 10px; border-left: 2px solid black">
        <ExplanationNode
          v-for="(child, index) in node.children"
          :key="'explanation-node-' + JSON.stringify(position.concat(index))"
          :node="child"
          :position="position.concat(index)"
          :selection="selection"
          @selection="handleSelection"
        />
      </div>
      <div
        class="explanation-node-tag"
      >
        &lt;/<span class="explanation-node-tag-name">{{ node.name }}</span>&gt;
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

import { getInlineTagHelp, getInlineTextHelp } from '../js/help';

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

<style lang="scss" scoped>
.explanation-node {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  transition: background-color 0.1s;
}
.explanation-node-selected {
  background-color: rgba($primary, 0.2);
}
.explanation-node-hovered,
.explanation-node-hovered .explanation-node-selected {
  background-color: rgba($primary, 0.1);
}
</style>
