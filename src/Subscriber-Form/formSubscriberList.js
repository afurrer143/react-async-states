import SubscriberView from "./formSubscriberView";

function FormSubscriberList({ formSubscribers, deleteSubscriber }) {
    console.log("FORM SUSCRIBER IN FORM SUBSCRIBER LIST IS:", formSubscribers )
    // form subscribers holds each info submitted in form...as an array for some reason. So it can be as big as it wants
    //['JAson Bob', 'afurrer143@gmail.com', 'youtube', 'Andrew Furrer', 'viperscooterdog@gmail.com', 'twitter']

  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        {formSubscribers.map((subscriber, index) => (
        <SubscriberView
          deleteSubscriber={() => deleteSubscriber(index)}
          key={index}
          subscriber={subscriber}
    
        />
      ))}
      </ul>
    </>
  );
}

export default FormSubscriberList;