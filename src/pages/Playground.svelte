<script lang="ts">
  import Editor from '../components/Editor.svelte';
  import {
    defaultLoggerPrepend,
    defaultPlaygroundHTML,
    defaultPlaygroundCSS,
    defaultPlaygroundJS,
  } from '../constants/playground';
  import { pushToLocalStorage, retrieveFromLocalStorage } from '../services/storage.service';

  let html: string = retrieveFromLocalStorage('html') ? retrieveFromLocalStorage('html') : defaultPlaygroundHTML;
  let css: string = retrieveFromLocalStorage('css') ? retrieveFromLocalStorage('css') : defaultPlaygroundCSS;
  let js: string = retrieveFromLocalStorage('js') ? retrieveFromLocalStorage('js') : defaultPlaygroundJS;
  let _js: string = defaultLoggerPrepend + js;

  let logArray: string[] = [];

  $: srcDoc = `<html><body>${html}</body><sty` + `le>${css}</style><scr` + `ipt>${_js}</scr` + `ipt></html>`;

  const debounceHTML = (value: string): (() => void) => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      html = value;
      pushToLocalStorage('html', value);
    }, 300);
    return () => clearTimeout(timer);
  };

  const debounceCSS = (value: string): (() => void) => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      css = value;
      pushToLocalStorage('css', value);
    }, 300);
    return () => clearTimeout(timer);
  };

  const debounceJS = (value: string): (() => void) => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      js = value;
      _js = defaultLoggerPrepend + value;
      pushToLocalStorage('js', value);
    }, 300);
    return () => clearTimeout(timer);
  };

  window.addEventListener('message', (res: MessageEvent<any>) => {
    if (res.data && res.data.source === 'iframe') {
      logArray = [...logArray, res.data.message[0]];
    }
  });
</script>

<main>
  <div class="playground-wrapper">
    <div class="editor-wrapper">
      <Editor lang="HTML" mode="xml" onChange={debounceHTML} value={html} />
      <Editor lang="CSS" mode="css" onChange={debounceCSS} value={css} />
      <Editor lang="JS" mode="javascript" onChange={debounceJS} value={js} />
    </div>
    <div class="divider" />
    <div class="frame-div">
      <iframe
        class="iframe-panel"
        id="playground-frame"
        contenteditable
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        srcdoc={srcDoc}
      />
      <div class="console-panel">
        {#each logArray as msg}
          <span class="console-log">{msg}</span>
          <div class="log-divider" />
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  .playground-wrapper {
    display: flex;
    flex-direction: column;
  }

  .divider {
    border: black 2px solid;
    height: 0px;
    margin: 5px 0;
  }

  .log-divider {
    border: black 0.5px solid;
    height: 0px;
    margin: 1px 0;
  }

  .editor-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: aliceblue;
  }

  .frame-div {
    display: flex;
    height: 80vh;
    flex-direction: column;
    width: 100vw;
  }

  .iframe-panel {
    height: 50%;
  }

  .console-panel {
    height: 50%;
    overflow-y: scroll;
    background-color: #263238;
    color: aliceblue;
  }

  .console-log {
    overflow-wrap: anywhere;
    font-size: 1em;
  }

  @media screen and (min-width: 768px) {
    .editor-wrapper {
      height: 45vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: aliceblue;
    }
    .frame-div {
      height: 40vh;
      flex-direction: row;
    }

    .iframe-panel,
    .console-panel {
      height: 100%;
      width: 50%;
    }
  }
</style>
