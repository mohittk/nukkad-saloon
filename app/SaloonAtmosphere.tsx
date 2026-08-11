"use client";

import { useEffect, useState } from "react";

const chaiMessages = [
  "उस्ताद उस्तरा तेज कर रहे हैं",
  "अगला गाना एक कटिंग चाय के बाद",
  "कुर्सी नंबर 2 खाली है",
  "पुराने गाने, नया मूड",
  "गली के कोने से लाइव",
];

export function SaloonAtmosphere() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMessageIndex((index) => (index + 1) % chaiMessages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="saloon-atmosphere" aria-live="polite">
      <div className="quote-flight" key={messageIndex}>
        <span>“{chaiMessages[messageIndex]}”</span>
      </div>
    </div>
  );
}
