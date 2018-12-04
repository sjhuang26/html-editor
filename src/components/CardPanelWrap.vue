<template>
  <div class="card-panel v-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardPanelWrap',
};
</script>

<style scoped>
.card-panel {
  margin: 1rem;
}
</style>
