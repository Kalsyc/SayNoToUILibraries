<script lang="ts">
  import CodeMirror from 'codemirror';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/theme/material.css';
  import 'codemirror/mode/xml/xml';
  import 'codemirror/mode/javascript/javascript';
  import 'codemirror/mode/css/css';
  import { onMount } from 'svelte';

  let editorContainer: HTMLDivElement;
  let editorTextArea: HTMLTextAreaElement;
  export let lang: string;
  export let mode: string;
  export let onChange: (string) => void;
  export let value: string;

  onMount(() => {
    //const childArea: HTMLTextAreaElement = document.createElement('textarea');
    //editorContainer.appendChild(childArea);
    editorTextArea.textContent = value;
    const editor = CodeMirror.fromTextArea(
      editorTextArea,
      //function (elt) {
      //editorContainer.replaceChild(elt, childArea);
      //},
      {
        mode: mode,
        lineNumbers: true,
        theme: 'material',
        indentUnit: 2,
        lineWrapping: true,
      },
    );
    editor.on('changes', (instance, changeObj) => {
      onChange(instance.doc.getValue());
    });
    editor.setSize('auto', '40vh');

    setTimeout(() => {
      editor.refresh();
    }, 100);
  });
</script>

<main>
  <div class="wrapper">
    <span>{lang}</span>
    <div bind:this={editorContainer}>
      <textarea bind:this={editorTextArea} />
    </div>
  </div>
</main>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 5px;
  }
  @media screen and (min-width: 768px) {
    .wrapper {
      width: 30vw;
    }
  }
</style>
