<template>
  <div>
    <b-card title="Examples"> 
      <b-tabs>
        <b-tab v-for="(example, index) of examples" :key="'tutorial-example-' + JSON.stringify(example)" :title="String(index + 1)">
          <p>{{ example.description }}</p>
          <pre class="example-code"><code>{{ example.code }}</code></pre>
          <b-button @click="tutorialTryOut(example.code)">Try it out</b-button>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Examples',
  props: {
    examples: {
      type: Array,
      required: true
    }
  },
  methods: {
    tutorialTryOut(code) {
      this.updateCode(code);
    },
    ...mapActions([
      'updateCode'
    ])
  }
};
</script>

<style scoped>
.example-code {
  display: block;
}
</style>