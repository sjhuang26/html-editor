<template>
  <div>
    <p>{{ tags[tag].extendedDescription }}</p>
    <Examples :examples="[codeSample]"/>
  </div>
</template>

<script>
import { tags } from '../js/help';
import Examples from './Examples';

export default {
  name: 'ReferenceTag',
  components: {
    Examples
  },
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