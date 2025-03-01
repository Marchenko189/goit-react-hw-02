import { useState, useEffect } from 'react';
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from './components/Notification/Notification';


export default function App() {

  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('local-feedback');
  return savedClicks ? JSON.parse(savedClicks) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => { 
    setClicks(click => ({
      ...click,
      [feedbackType]: click[feedbackType] +1
    }))
  }

  const resetFeedback = () => {
  setClicks({
    good: 0,
    neutral: 0,
    bad: 0
  });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  useEffect(() => {
    localStorage.setItem('local-feedback', JSON.stringify(clicks))
  }, [clicks]);

  return(
  <>
      <Description />
      <Options resetClick={resetFeedback} totalClick={totalFeedback} updateClick={updateFeedback} />
      {totalFeedback >= 1 ? <Feedback total={totalFeedback} update={clicks} /> : <Notification />}
  </>
  )
}

