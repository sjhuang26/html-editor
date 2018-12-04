<template>
  <div class="css-selector">
    <div class="css-selector-tokens">
      <div
        v-for="selectorToken of selector"
        :key="JSON.stringify(selectorToken)"
        class="css-selector-token"
      >
        <div
          v-if="selectorToken.type === 'id'"
          v-b-tooltip.hover="'Only the elements with this id'">
          #{{ selectorToken.content }} (ID)
        </div>
        <div
          v-if="selectorToken.type === 'class'"
          v-b-tooltip.hover="'Only the elements with this class'">
          .{{ selectorToken.content }} (CLASS)
        </div>
        <div
          v-if="selectorToken.type === 'tag'"
          v-b-tooltip.hover="'Only the elements with this tag'">
          {{ selectorToken.content }} (TAG)
        </div>
        <div
          v-if="selectorToken.type === 'descendant'"
          v-b-tooltip.hover="'Then, consider all the elements under this one'">
          {{ '--->' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssSelectorExplanation',
  props: {
    selector: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.css-selector {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  transition: background-color 0.1s;
}
.css-selector-tokens {
  display: flex;
}
.css-selector-token {
  flex: 1;
}
.css-selector-token:hover {
  background-color: #0EE;
}
pre {
  display: inline;
}
</style>
