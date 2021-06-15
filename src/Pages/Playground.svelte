<script lang="ts">
  import Editor from '../Components/Editor.svelte';

  let html: string = `<button class="general-btn fill-btn" onclick="onChange()">
  Press me!
</button>
`;

  let css: string = `.general-btn {
  width: 120px;
  height: 50px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  font-family: Roboto;
  font-weight: 500;
  border: none;
}

.fill-btn {
  color: #ffffff;
  background: linear-gradient(263.58deg, #ff8787 -19.46%, #ffb21c 84.09%, #ffde33 131.25%);
}

.general-btn:hover {
  opacity: 50%;
}
`;

  let js: string = `const onChange = () => console.log("Pressed!")
`;

  $: srcDoc = `<html><body>${html}</body><style>${css}</style><scr` + `ipt>${js}</scr` + `ipt></html>`;

  
  const debounceHTML = (value) => {
    const timer = setTimeout(() => {
      html = value
    }, 300);
    return () => clearTimeout(timer);
  }

  const debounceCSS = (value) => {
    const timer = setTimeout(() => {
      css = value
    }, 300);
    return () => clearTimeout(timer);
  }
  
  const debounceJS = (value) => {
    const timer = setTimeout(() => {
      js = value
    }, 300);
    return () => clearTimeout(timer);
  }

</script>

<main>
  <div class="playground-wrapper">
    <div class="editor-wrapper">
      <Editor lang="HTML" mode="xml" onChange={debounceHTML} value={html} />
      <Editor lang="CSS" mode="css" onChange={debounceCSS} value={css} />
      <Editor lang="JS" mode="javascript" onChange={debounceJS} value={js} />
    </div>
    <div>
      <iframe contenteditable title="output" sandbox="allow-scripts" frameBorder="0" srcdoc={srcDoc} />
    </div>
  </div>
</main>

<style>
  .playground-wrapper {
    display: flex;
    flex-direction: column;
  }
  .editor-wrapper {
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: aliceblue;
  }
</style>
