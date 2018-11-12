<template>
  <span class="badge badge-primary">{{ levelText }}</span>
</template>

<script>
export default {
  name: 'TagLevelBadge',
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  computed: {
    levelText() {
      return 'Level ' + this.level;
    }
  }
};
</script>
