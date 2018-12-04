<template>
  <div class="v-layout">
    <div v-show="tutorialSection === null">
      <div class="tutorial-cluster">
        <h2>Basic concepts</h2>
        <ul class="list-group tutorial-toc">
          <li
            v-for="(page, index) in tutorial.pages"
            :key="'tutorial-table-of-contents-page' + index"
            class="tutorial-toc-item list-group-item list-group-item-action"
            @click="setTutorialSection(['page', index])"
          >{{ page.title }}<i class="fa fa-arrow-right"></i></li>
        </ul>
      </div>
      <div class="alert alert-primary tutorial-cluster">
        Now, we're going to learn some more HTML tags. Make sure you understand these basic concepts before moving on.
      </div>
      <div v-for="(category, index) of categorizedTags" :key="'reference-tag-category-' + index" class="tutorial-cluster">
        <h2>{{ category.name }}</h2>
        <p class="lead">{{ category.description }}</p>
        <ul class="list-group">
          <li
            v-for="tag of category.tags"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            :key="'reference-tag-category-tag-' + tag"
            @click="setTutorialSection(['tag', tag])"
          >
            <div>
              <p class="lead">{{ tag }} tag<span v-if="tags[tag].usedWith !== undefined" class="badge badge-primary">{{ 'Used with ' + tags[tag].usedWith + ' tag' }}</span></p>
              <p>{{ tags[tag].description }}</p>
            </div>
            <i class="fa fa-arrow-right"></i>
          </li>
          <li
            v-if="category.examples !== undefined"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-primary"
            @click="setTutorialSection(['topic-examples', index])"
          >
            Further examples
            <i class="fa fa-arrow-right"></i>
          </li>
        </ul>
      </div>
    </div>
    <PanelHeaderWrap
      v-if="tutorialSection !== null && tutorialSection[0] === 'page'"
      :title="tutorial.pages[tutorialSection[1]].title"
      :includeBack="true"
      @backButtonClick="setTutorialSection(null)"
      bodyClass="scroll-layout"
    >
      <Lesson :markdownContent="tutorial.pages[tutorialSection[1]].lessonMarkdownContent" />
      <Examples v-if="tutorial.pages[tutorialSection[1]].examples !== undefined" :examples="tutorial.pages[tutorialSection[1]].examples" />
    </PanelHeaderWrap>
    <PanelHeaderWrap
      v-if="tutorialSection !== null && tutorialSection[0] === 'tag'"
      :title="tutorialSection[1] + ' tag'"
      includeBack
      @backButtonClick="setTutorialSection(null)"
      bodyClass="scroll-layout">
      <ReferenceTag :tag="tutorialSection[1]" />
    </PanelHeaderWrap>
    <PanelHeaderWrap
      v-if="tutorialSection !== null && tutorialSection[0] === 'topic-examples'"
      title="Examples"
      includeBack
      @backButtonClick="setTutorialSection(null)"
      bodyClass="scroll-layout"
    >
      <Examples :examples="categorizedTags[tutorialSection[1]].examples" />
    </PanelHeaderWrap>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import { tags, categorizedTags } from '../js/help';
import { tutorial } from '../js/tutorial';
import Lesson from './TutorialLesson';
import Examples from './Examples';
import PanelHeaderWrap from './PanelHeaderWrap';
import ReferenceTag from './ReferenceTag';

export default {
  name: 'TutorialPanel',
  components: {
    Lesson,
    Examples,
    PanelHeaderWrap,
    ReferenceTag
  },
  data() {
    return {
      tutorial,
      tags,
      categorizedTags
    };
  },
  methods: {
    ...mapMutations([
      'setTutorialSection'
    ])
  },
  computed: {
    ...mapState([
      'tutorialSection'
    ])
  }
};
</script>

<style scoped>
.tutorial-toc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tutorial-toc {
  margin: 1.5rem 0;
}
.tutorial-cluster {
  margin-bottom: 6rem;
}
</style>