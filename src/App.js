import React, { useState } from "react";
import "./App.css";
// sub
import SubscribeButton from "./Subscribe-Button-and-Count/subscribeButton.js";
import SubCount from "./Subscribe-Button-and-Count/subCount";
// coin toss
import CoinTossCounter from "./Coint-Toss-Counter/CointTossCounter";
import coinTossHandleClick from "./Coint-Toss-Counter/cointTossHandleClick";
import deleteLastRow from "./Coint-Toss-Counter/deleteLastRow";
// form subscriber
import SubscriberForm from "./Subscriber-Form/SubscribeForm";
import FormSubscriberList from "./Subscriber-Form/formSubscriberList";
import createNewSubscriberHandler from "./Subscriber-Form/createNewSubscriber";
import deleteFormSubscriberHandler from "./Subscriber-Form/deleteSubscriber";

function App() {
  // sub toggle + helped function to use incrementor
  const [subscribed, setSubscribed] = useState(false);
  const toggleSubscribed = () => {
    setSubscribed(!subscribed);
    if (!subscribed) {
      subcountIncrease();
    }
  };
  const [subscribedCount, setSubscribedCount] = useState(0);
  const subcountIncrease = () => setSubscribedCount(subscribedCount + 1);

  // alerts button
  const [alerts, setAlerts] = useState(false);

  // coin toss state buttons
  // value is the "H" or "T" defined in the function
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });
  const handleClick = (value) => {
    coinTossHandleClick(value, results, setResults, counts, setCounts);
  };
  // delete last row in coin toss
  const handleDeleteLast = () => {
    deleteLastRow(results, counts, setResults, setCounts);
  };
  
  // form subscribers
  const [formSubscribers, setFormSubscribers] = useState([])

  const createSubscriber = (formData) => {
    createNewSubscriberHandler(formData, setFormSubscribers)
  }

  const deleteSubscriber = (indexToDelete) => {
    deleteFormSubscriberHandler(indexToDelete, setFormSubscribers)
  }

  // RETURN AND RENDER HERE
  return (
    <section>
      <SubscribeButton
        subscribed={subscribed}
        handleSubToggle={toggleSubscribed}
      />

      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>

      <SubCount subscribedCount={subscribedCount} />
      <CoinTossCounter
        results={results}
        handleCoinTossClick={handleClick}
        handleDeleteLast={handleDeleteLast}
        counts={counts}
      />

      <SubscriberForm createSubscriber={createSubscriber}/>
      <FormSubscriberList
        formSubscribers={formSubscribers}
        deleteSubscriber={deleteSubscriber}
      />
    </section>
  );
}

export default App;
