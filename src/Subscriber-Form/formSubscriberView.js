function SubscriberView({ subscriber, deleteSubscriber }) {
  console.log("Current subscriber", subscriber);
  subscriber.map((currentSubscriber, index) => {
      
  })
  return (
    <li>
      <p>Name: {subscriber}</p>
      <p>Email: {subscriber}</p>
      <p>Referal: {subscriber}</p>
      <button name="delete" onClick={deleteSubscriber}>
        Unsubscribe
      </button>
    </li>
  );
}

export default SubscriberView;