import { useState } from "react";

export default function App() {
  const [blur, setBlur] = useState(8);
  const [opacity, setOpacity] = useState(20);
  const [color, setColor] = useState("indigo");

  const colorMap = {
    indigo: "from-indigo-500 to-purple-600",
    emerald: "from-emerald-400 to-teal-600",
    rose: "from-rose-500 to-orange-500",
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-linear-to-tr ${colorMap[color]} p-4 transition-all duration-500`}
    >
      {/* Glass Card */}
      <div
        style={{
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,
        }}
        className="w-full max-w-sm rounded-2xl border border-white/30 p-6 shadow-2xl text-white backdrop-blur"
      >
        <h2 className="text-2xl font-bold mb-6 drop-shadow-sm">
          Glass UI Preview
        </h2>

        {/* Controls */}
        <div className="space-y-4 text-sm font-medium">
          <div>
            <label className="block mb-1">Blur: {blur}px</label>
            <input
              type="range"
              min="0"
              max="24"
              value={blur}
              onChange={(e) => setBlur(Number(e.target.value))}
              className="w-full accent-white"
            ></input>
          </div>
          <div>
            <label className="block mb-1">Opacity: {opacity}%</label>
            <input
              type="range"
              min="10"
              max="80"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full accent-white"
            ></input>
          </div>
          <label className="block mb-2">Background Theme</label>
          <div className="flex gap-2">
            {Object.keys(colorMap).map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`capitalize px-3 py-1.5 rounded-lg border transition text-xs font-semibold 
                  ${
                    color === c
                      ? "bg-white text-slate-900 border-white"
                      : "border-white/40 bg-white/10 hover:bg-white/20"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
