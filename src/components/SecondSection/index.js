import React from "react";
import ContentSecondSection from "./ContentSecondSection";
import { SecondContainer} from "./SecondElements";
import "./style.css";

function SecondSection() {
  return (
    <SecondContainer>
 
        <div className="SecondSec">
          <ContentSecondSection />
        </div>
    </SecondContainer>
  );
}

export default SecondSection;
