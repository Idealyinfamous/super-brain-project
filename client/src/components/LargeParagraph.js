import { useState } from "react";
import { Button } from "@mui/material";

const LargeParagraph = ({ text, maxChars = 100 }) => {
  const [showMore, setShowMore] = useState(false);

  const strippedText = text.replace(/<[^>]+>/g, "");
  const shortText = `${strippedText.substring(0, maxChars)}`;

  if (showMore) {
    return (
      <div>
        <p>{strippedText}</p>
        <Button
          style={{
            borderRadius: 20,
            fontFamily: "Open-Dyslexic",
            color: "#6c3428",
            marginTop: 10,
          }}
          variant="outlined"
          onClick={() => {
            setShowMore(false);
          }}
        >
          Read Less
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <p>{shortText}</p>
        <Button
          style={{
            borderRadius: 20,
            fontFamily: "Open-Dyslexic",
            color: "#6c3428",
            marginTop: 10,
          }}
          variant="outlined"
          onClick={() => {
            setShowMore(true);
          }}
        >
          Read More
        </Button>
      </div>
    );
  }
};
export default LargeParagraph;
