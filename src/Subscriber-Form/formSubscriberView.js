function SubscriberView({ subscriber, deleteSubscriber }) {
  console.log("Current subscriber", subscriber);
  // Could pass formdata here per haps and find a way to loop throug that?
  // ex have index calls? As lon as it is only the newly added form data and doesnt overwrite the previous info??
  //<p>Name: {subscriber[0]}</p>
  // <p>Email: {subscriber[1]}</p>
  // <p>Referal: {subscriber}</p>
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