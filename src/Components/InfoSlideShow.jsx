// import { useState } from 'react';
import { LocationSlide } from "./infoSlides/LocationSlide.jsx";
import { BudgetSlide } from "./infoSlides/BudgetSlide.jsx";
import { NumPeopleSlides } from "./infoSlides/NumPeopleSlides.jsx";
import { NumDaysSlide } from "./infoSlides/NumDaysSlide.jsx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function InfoSlideShow({ slideNumber }) {
  // const [location, setLocation] = useState('');
  const [budget, setBudget] = useState("");
  // const [people, setPeople] = useState(0);
  // const [timeFrame, setTimeFrame] = useState('');

  console.log(slideNumber);
  const getTitle = () => {
    if (slideNumber === 0) {
      return "Where would you like to go?";
    } else if (slideNumber === 1) {
      return "What's the maximum spending limit?";
    } else if (slideNumber === 2) {
      return "How many people would like to come?";
    } else if (slideNumber === 3) {
      return "How long would you like to stay?";
    }
    return "Title"; // Default title if slideNumber is not matched
  };
  return (
    <>
      <p className="info-input-title">{getTitle()}</p>
      <div className="info-input-container">
        {slideNumber === 0 && <LocationSlide />}
              {slideNumber === 1 && <BudgetSlide budget={budget}  setBudget={setBudget} />}
        {slideNumber === 2 && <NumPeopleSlides />}
        {slideNumber === 3 && <NumDaysSlide />}
      </div>
    </>
  );
}
