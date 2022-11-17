import SubscriberView from "./formSubscriberView";

function FormSubscriberList({ formSubscribers, deleteSubscriber }) {
    console.log("FORM SUSCRIBER IN FORM SUBSCRIBER LIST IS:", formSubscribers )
    //['JAson Bob', 'afurrer143@gmail.com', 'youtube', 'Andrew Furrer', 'viperscooterdog@gmail.com', 'twitter']
    // const list =Object.values(formSubscribers).map((subscriber, index) => (
    //     <SubscriberView
    //       deleteSubscriber={() => deleteSubscriber(index)}
    //       key={index}
    //       subscriber={subscriber}
    //     />
    //   ))
  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        <SubscriberView subcriber={formSubscribers}/>
      </ul>
    </>
  );
}

export default FormSubscriberList;