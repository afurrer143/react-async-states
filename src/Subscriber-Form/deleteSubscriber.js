function deleteFormSubscriberHandler (indexToDelete, setSubscribers) {
    setSubscribers((currentSubscribers) =>
    currentSubscribers.filter((post, index) => index !== indexToDelete)
  );
}

export default deleteFormSubscriberHandler