<script lang="ts">
  import CodeMirror from 'codemirror';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/theme/material.css';
  import 'codemirror/mode/xml/xml';
  import 'codemirror/mode/javascript/javascript';
  import 'codemirror/mode/css/css';

  const editor = CodeMirror(document.body, {
    mode: 'javascript',
  });
</script>

<main>
  <textarea id="editor" />
</main>

<style>
</style>
