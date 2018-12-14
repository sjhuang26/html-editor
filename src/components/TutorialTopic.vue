<template>
  <div>
    <div class="tutorial-cluster">
      <p class="lead">{{ topic.description }}</p>
      <h1>New tags</h1>
      <p class="lead">These are new HTML tags that are related to this topic.</p>
      <div
        v-for="tag of topic.tags"
        class="tutorial-cluster-small"
        :key="'tutorial-topic-' + topic.name + '-tag-' + tag"
      >
        <h2>{{ tag + ' tag' }}</h2>
        <ReferenceTag :tag="tag" />
      </div>
    </div>
    <div class="tutorial-cluster" v-if="topic.examples !== undefined">
      <h1>Examples</h1>
      <Examples hideTitle :examples="topic.examples" />
    </div>
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
<style>
.tutorial-cluster {
  margin-bottom: 6rem;
}
.tutorial-cluster-small {
  margin-bottom: 2rem;
}
</style>