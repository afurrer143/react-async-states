
// const subscribeButton = ({subscribed, subscribedCount, setSubscribedCount}) => {

//   return (
//     <div>
//       <p>Please click to subscribe to my updates!</p>
//       <p>Subscriber Count: {subscribedCount}</p>
//       <button
//         onClick={() => {
//           //only increments sub count when subbed is false (and changing to true) so unsubbing doesnt increment count
//           if (!subscribed) {
//             setSubscribedCount((currentCount) => currentCount + 1);
//           }
//         }}
//       >
//         {subscribed ? "Unsubscribe" : "Subscribe"}
//       </button>
//     </div>
//   );
// }
function subscribeButton ( {subscribed, handleSubToggle}) {
  return (
    <button onClick={handleSubToggle}>
      {subscribed ? "Unsubscribe" : "Subscribe"}
    </button>
  );
}

export default subscribeButton;
