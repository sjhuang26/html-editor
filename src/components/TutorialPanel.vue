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
      <div class="tutorial-cluster">
        <h2>More topics</h2>
        <ul class="list-group">
          <li
            v-for="(category, index) of categorizedTags" :key="'tutorial-topic-link-' + index"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            @click="setTutorialSection(['topic', index])"
          >
            {{ category.name }}
            <i class="fa fa-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div class="tutorial-cluster">
        <h2>Finishing up</h2>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            @click="setTutorialSection(['conclusion'])"
          >
            Conclusion
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
      v-if="tutorialSection !== null && tutorialSection[0] === 'topic'"
      :title="categorizedTags[tutorialSection[1]].name"
      :includeBack="true"
      @backButtonClick="setTutorialSection(null)"
      bodyClass="scroll-layout"
    >
      <TutorialTopic :topic="categorizedTags[tutorialSection[1]]" />
    </PanelHeaderWrap>
    <PanelHeaderWrap
      v-if="tutorialSection !== null && tutorialSection[0] === 'conclusion'"
      :includeBack="true"
      title="Conclusion"
      @backButtonClick="setTutorialSection(null)"
      bodyClass="scroll-layout"
    >
      <h1>Congratulations! You're done!</h1>
      <p>Some things you can do next:</p>
      <ul>
        <li>Try making your own website; start writing HTML in the code editor box!</li>
        <li>This tutorial just covered the basics. Try looking at the <a href="https://www.w3schools.com/html/default.asp">W3Schools</a> tutorial for a more comprehensive tutorial. Note that this app does not yet support more advanced features of HTML which may be covered in more advanced tutorials (such as comments).</li>
        <li>Once you create your website, click "export code" to download an HTML file that should open your website when double-clicked.</li>
      </ul>
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
import TutorialTopic from './TutorialTopic';

export default {
  name: 'TutorialPanel',
  components: {
    Lesson,
    Examples,
    PanelHeaderWrap,
    ReferenceTag,
    TutorialTopic
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