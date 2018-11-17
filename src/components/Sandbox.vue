<!-- basically an IFRAME used in the website panel with point-and-click selection functionality -->
<template>
  <div class="v-layout sandbox">
    <iframe v-show="navigationDestination === null" class="sandbox-iframe" ref="iframe">
    </iframe>
    <div class="jumbotron sandbox-navigation-message" v-show="navigationDestination !== null">
      <p class="display-4">The link worked!</p>
      <p class="lead">It would have gone to {{ navigationDestination }}.</p>
      <button class="btn btn-primary" @click="navigationDestination = null">Go back</button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Sandbox',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      $c: undefined,
      child: undefined,
      navigationDestination: null
    };
  },
  mounted() {
    this.updateIframe();
  },
  methods: {
    updateIframe() {
      // get the IFRAME "window" object
      const child = this.$refs.iframe.contentWindow;
      
      const childDoc = child.document;
      const $c = $(childDoc);

      // write the raw content
      childDoc.open('text/html', 'replace');
      childDoc.write(this.content);
      childDoc.close();
      
      // MAKE SURE THERE'S A HEAD TAG + BODY TAG
      // jQuery is not used here to ensure consistency
      if (childDoc.getElementsByTagName('html')[0] == null) {
        childDoc.appendChild(childDoc.createElement('html'));
      }
      if (childDoc.getElementsByTagName('head')[0] == null) {
        childDoc.getElementsByTagName('html')[0].appendChild(childDoc.createElement('head'));
      }
      if (childDoc.getElementsByTagName('body')[0] == null) {
        childDoc.getElementsByTagName('html')[0].appendChild(childDoc.createElement('body'));
      }

      // INJECT CSS
      const injectedCSS = `
      `;
      $c.find('head').append($('<style>').text(injectedCSS));

      // LINKS
      $c.find('a').on('click', (e) => {
        this.navigationDestination = e.target.href;
        return false;
      });

      /*$c.find('html').on('click', (e) => this.handleElementClicked(e.target));

      $c.find('html').on('mouseover mouseout', (e) => {
        $(e.target).toggleClass('INJECTED_hovered', e.type === 'mouseover');
        e.stopPropagation();
      });*/

      this.$c = $c;
      this.child = child;
    }
    /*handleElementClicked(target) {
      $(target).addClass('INJECTED_highlighted');
      if (this.currentSelectedElement !== undefined) {
        $(this.currentSelectedElement).removeClass('INJECTED_highlighted');
      }
      this.currentSelectedElement = target;
    },
    addChild() {
      const tag = window.prompt('Tag name?');
      if (tag === 'text') {
        const text = window.prompt('Text?');
        $(this.currentSelectedElement).append(document.createTextNode(text));
      } else {
        $(this.currentSelectedElement).append(document.createElement(tag));
      }
    }*/
  },
  watch: {
    content() {
      this.updateIframe();
    }
  }
}
</script>

<style scoped>
.sandbox-iframe {
  border: none;
  outline: none;
  overflow: auto;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.sandbox-navigation-message {
  margin: 1.5rem;
}
</style>
