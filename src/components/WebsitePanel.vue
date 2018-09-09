<template>
  <div>
    <Sandbox :content="code" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Sandbox from './Sandbox';

export default {
  name: 'WebsitePanel',
  components: {
    Sandbox
  },
  computed: {
    ...mapState([
      'code'
    ])
  }
};
</script>
