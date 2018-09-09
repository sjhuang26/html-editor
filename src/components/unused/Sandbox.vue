<template>
  <div>
    <iframe class="sandbox" ref="iframe">
    </iframe>
    <button :disabled="currentSelectedElement === undefined" @click="addChild">Add child</button>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'sandbox',
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
      currentSelectedElement: undefined
    };
  },
  mounted() {
    this.updateIframe();
  },
  methods: {
    updateIframe() {
      const child = this.$refs.iframe.contentWindow;
      const childDoc = child.document;
      const $c = $(childDoc);

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
      .INJECTED_highlighted {
        background-color: yellow !important;
      }
      .INJECTED_hovered {
        background-color: red !important;
      }
      * {
        min-height: 20px;
        outline: 3px solid #DDD !important;
      }
      `;
      $c.find('head').append($('<style>').text(injectedCSS));
      
      $c.find('html').on('click', (e) => this.handleElementClicked(e.target));

      $c.find('html').on('mouseover mouseout', (e) => {
        $(e.target).toggleClass('INJECTED_hovered', e.type === 'mouseover');
        e.stopPropagation();
      });

      this.$c = $c;
      this.child = child;
    },
    handleElementClicked(target) {
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
    }
  },
  watch: {
    content() {
      this.updateIframe();
    }
  }
}
</script>

<style scoped>
.sandbox {
  border: none;
  outline: 1px solid black;
  margin: 0;
  padding: 0;
  resize: both;
  overflow: auto;
}
</style>
