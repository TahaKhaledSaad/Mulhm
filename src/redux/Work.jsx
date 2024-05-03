import { buyCake } from "./Actions";
import { Store, Unsubscribe } from "./Store";

function Work() {
  // Actions that i want to dispatch
  Store.dispatch(buyCake());
  Store.dispatch(buyCake());
  Store.dispatch(buyCake());

  // Go to last State of the Store
  Unsubscribe();

  return "";
}

export default Work;
