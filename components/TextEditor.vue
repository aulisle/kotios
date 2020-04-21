<template>
  <div class="text-editor">
    <editor-menu-bar
      v-if="editable"
      v-slot="{ commands, isActive }"
      :editor="editor"
    >
      <div>
        <base-button
          :class="{ 'md-primary': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          Yläotsikko
        </base-button>
        <base-button
          :class="{ 'md-primary': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          Alaotsikko
        </base-button>
      </div>
    </editor-menu-bar>
    <editor-content
      :editor="editor"
      :class="{ editable: editable, 'not-editable': !editable }"
    />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Heading, History } from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  props: {
    value: { type: [Object, String], required: true },
    editable: { type: Boolean, default: true }
  },

  data() {
    return {
      editor: null
    }
  },

  watch: {
    value(val) {
      // so cursor doesn't jump to start on typing
      if (this.editor && val !== this.value) {
        this.editor.setContent(val, true)
      }
    }
  },

  mounted() {
    this.editor = new Editor({
      editable: this.editable,
      extensions: [new Heading({ levels: [1, 2] }), new History()],
      content: this.value,
      onUpdate: ({ getJSON }) => {
        this.$emit('input', getJSON())
      },
      onInit: () => {
        if (process.client) {
          this.$emit('initialised')
        }
      }
    })

    this.editor.setContent(this.value)
  },

  beforeDestroy() {
    if (this.editor && process.client) {
      this.editor.destroy()
    }
  }
}
</script>

<style lang="scss">
.text-editor *:focus {
  outline: none !important;
}

.text-editor .editable .ProseMirror {
  border: 1px solid $color-hr;
  padding: $u3;
  max-height: 500px;
  overflow: auto;
}

.ProseMirror {
  table,
  tr,
  th,
  td {
    border: 1px solid $color-hr;
    border-collapse: collapse;
  }

  td {
    padding: 5px;
  }
}

.text-editor h1 {
  font-size: 34px;
  font-weight: bold;
  line-height: 100%;
  color: black;
  letter-spacing: 1.2px;
}

.text-editor h2 {
  font-size: 24px;
  font-weight: bold;
  line-height: 100%;
  color: black;
  letter-spacing: 0.8px;
}

.text-editor h3 {
  font-size: 20px;
  font-weight: normal;
  line-height: 100%;
  color: black;
  letter-spacing: 0.2px;
}
</style>
