"use client";

import { useEffect, useState } from "react";

const chaiMessages = [
  "भैया साइड से छोटा, ऊपर से सेट रखना",
  "मशीन चलेगी तो नींद अपने आप आ जाएगी",
  "आईने में देखो, हीरो लग रहे हो",
  "दाढ़ी ऐसी बनाओ कि घर वाले पहचानें नहीं",
  "शादी में जाना है, कटिंग दमदार चाहिए",
  "थोड़ा और छोटा करो, बस ज्यादा नहीं",
  "तेल लगाओगे तो बाल खुद लाइन में आ जाएंगे",
  "उस्ताद, पुराना गाना तेज कर दो",
  "मूंछ बराबर रखना, इज्जत का सवाल है",
  "कुर्सी नंबर दो पर पूरा मोहल्ला अपडेट होता है",
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
