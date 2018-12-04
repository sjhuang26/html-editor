<template>
  <div>
    <p>{{ tags[tag].extendedDescription }}</p>
    <b-card title="Code example">
      <pre><code>{{ codeSample }}</code></pre>
    </b-card>
  </div>
</template>

<script>
import { tags } from '../js/help';

export default {
  name: 'ReferenceTag',
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tags
    };
  },
  computed: {
    codeSample() {
      return this.tags[this.tag].usedWith === undefined ? this.tags[this.tag].codeSample : this.tags[this.tags[this.tag].usedWith].codeSample;
    }
  }
};
</script>