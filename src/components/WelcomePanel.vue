<template>
  <div class="jumbotron welcome">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">HTML is a programming language used to make websites.</p>
    <p class="lead">Pick something to do from the menu at the top. If you're new to HTML, it is recommended that you start with the Tutorial.</p>
  </div>
</template>

<script>
export default {
  name: 'WelcomePanel'
};
</script>

<style lang="scss" scoped>
.welcome {
  background: linear-gradient(135deg, rgba($primary, 0.3), rgba($primary, 0.5));
  margin: 1rem;
}
</style>