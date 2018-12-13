<template>
  <div>
    <h1>New tags</h1>
    <div
      v-for="tag of topic.tags"
      :key="'tutorial-topic-' + topic.name + '-tag-' + tag"
    >
      <h2>{{ tag + ' tag' }}</h2>
      <ReferenceTag :tag="tag" />
    </div>
    <template v-if="topic.examples !== undefined">
      <h1>Examples</h1>
      <Examples hideTitle :examples="topic.examples" />
    </template>
  </div>
</template>

<script>
import ReferenceTag from './ReferenceTag';
import Examples from './Examples';

export default {
  name: 'TutorialTopic',
  components: {
    ReferenceTag,
    Examples
  },
  props: {
    topic: {
      type: Object,
      required: true
    }
  }
};
</script>
