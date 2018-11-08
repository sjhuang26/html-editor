<!-- the entrypoint of the app -->
<template>
  <div class="app">
    <AppBody class="h-100" />
  </div>
</template>

<script>
import AppBody from './components/AppBody';

export default {
  name: 'App',
  components: {
    AppBody
  }
};
</script>

<style scoped>
.app {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}
</style>

<style>
.h-layout {
  display: flex;
  flex-flow: row;
}
.h-layout > * {
  flex: 1;
  min-width: 0;
}
.v-layout {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.v-layout > * {
  flex: 1;
  min-width: 0;
}
.scroll-layout {
  overflow: auto;
}
.fixed-scroll-layout {
  overflow: scroll;
}
.CodeMirror {
  font-size: 1.5rem;
}
</style>
