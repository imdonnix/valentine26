import { useEffect, useState } from "react";

const messages = [
  "Initializing Valentine.exe...",
  "Loading emotions...",
  "Checking compatibility...",
  "Result: 100% match ❤️",
  "",
  "Error: Unable to stop thinking about you.",
  "Hotfix applied: Extra hugs & kisses enabled.",
  "",
  "Final prompt:"
];

export default function App() {
  const [lines, setLines] = useState<string[]>([]);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    messages.forEach((msg, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, msg]);
        if (i === messages.length - 1) {
          setTimeout(() => setShowButtons(true), 500);
        }
      }, i * 700);
    });
  }, []);

  const handleYes = () => {
    setLines([
      "🎉 Program executed successfully!",
      "Valentine accepted 💕",
      "I can't wait to spend Feb 14 with you ❤️"
    ]);
    setShowButtons(false);
  };

  return (
    <div className="container">
      <div className="terminal">
        {lines.map((line, i) => (
          <p key={i} className="line">
            {line}
          </p>
        ))}

        {showButtons && (
          <>
            <p className="question">Will you be my Valentine? 💖</p>
            <div className="actions">
              <button className="yes" onClick={handleYes}>
                Yes 💘
              </button>
              <button
                className="no"
                onMouseEnter={(e) => {
                  const btn = e.currentTarget;
                  btn.style.left = Math.random() * 70 + "%";
                  btn.style.top = Math.random() * 70 + "%";
                }}
              >
                No 🙃
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
