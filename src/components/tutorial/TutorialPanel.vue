<template>
  <div>
    <Pagination />
    <div v-for="(page, index) in tutorial.pages" :key="'tutorial-page-' + index" v-show="currentTutorialPageIndex === index">
      <h1>{{ page.title }}</h1>
      <Lesson :markdownContent="page.lessonMarkdownContent" />
      <Examples :examples="page.examples" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { tutorial } from '../../js/tutorial';
import Lesson from './Lesson';
import Examples from './Examples';
import Pagination from './Pagination';

export default {
  name: 'TutorialPanel',
  components: {
    Lesson,
    Examples,
    Pagination
  },
  data() {
    return {
      tutorial
    };
  },
  computed: {
    ...mapState([
      'currentTutorialPageIndex'
    ])
  }
};
</script>
