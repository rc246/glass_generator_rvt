import { useState } from "react";

export default function App() {
  const [blur, setBlur] = useState(8);
  const [opacity, setOpacity] = useState(20);

  return (
    <div>
      <h2>Glass UI Preview</h2>
      <label>Blur: {blur}px</label>
      <input
        type="range"
        min="0"
        max="24"
        value={blur}
        onChange={(e) => setBlur(Number(e.target.value))}
      ></input>
      <label>Opacity: {opacity}px</label>
      <input
        type="range"
        min="10"
        max="80"
        value={opacity}
        onChange={(e) => setOpacity(Number(e.target.value))}
      ></input>
      <button>indigo</button>
      <button>emerald</button>
      <button>rose</button>
    </div>
  );
}
