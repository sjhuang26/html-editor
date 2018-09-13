<!-- the entrypoint of the app -->
<template>
  <div class="app">
    <PanelCollection />
  </div>
</template>

<script>
import PanelCollection from './components/PanelCollection';

export default {
  name: 'App',
  components: {
    PanelCollection
  }
};
</script>

<style scoped>
.app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
