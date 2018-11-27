<template>
  <div>
    <b-card title="Examples"> 
      <b-tabs>
        <b-tab v-for="(example, index) of examples" :key="'tutorial-example-' + JSON.stringify(example)" :title="String(index + 1)">
          <template v-if="typeof example === 'string'">
            <pre class="example-code"><code>{{ example }}</code></pre>
          </template>
          <template v-else>
            <p>{{ example.description }}</p>
            <pre class="example-code"><code>{{ example.code }}</code></pre>
          </template>
            <b-button @click="tutorialTryOut(example.code)">Edit example</b-button>
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
    /*
    prop looks like:
    [{
      description: 'Description',
      code: '<p>hi</p>'
    }, {
      description: 'Description 2',
      code: '<p>hi again</p>'
    }, ...]

    OR

    ['<p>Hi</p>', '<p>Hi again</p>']

    and in this case there will not be any descriptions.
    */
    examples: {
      type: Array,
      required: true
    }
  },
  methods: {
    tutorialTryOut(code) {
      this.turnExamplesOn();
      this.updateCode(code);
    },
    ...mapActions([
      'updateCode',
      'turnExamplesOn'
    ])
  }
};
</script>

<style scoped>
.example-code {
  display: block;
}
</style>