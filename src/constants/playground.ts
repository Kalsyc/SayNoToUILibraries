export const defaultLoggerPrepend: string = `const _log = console.log;
console.log = function(...rest) {
  window.parent.postMessage(
    {
      source: 'iframe',
      message: rest,
    },
    '*'
  );
  _log.apply(console, arguments);
};
`;

export const defaultPlaygroundHTML: string = `<button class="general-btn fill-btn" onclick="onChange()">
  Press me!
</button>
`;

export const defaultPlaygroundCSS: string = `.general-btn {
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

export const defaultPlaygroundJS: string = `const onChange = () => console.log("Pressed!")
`;
