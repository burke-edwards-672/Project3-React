import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { api } from "./lib/api.js";

import Home from "./pages/home";
import Decks from "./pages/decks";
import View from "./pages/view";
import Edit from "./pages/edit";
import Settings from "./pages/settings";
import PageNotFound from "./pages/pagenotfound";

//Given a list of three ids and a new id, put the new id in the front and update the order.
function updateRecents(id, recents) {
  if (recents.includes(id)) {
    const idIndex = recents.indexOf(id);
    recents.splice(idIndex, 1);
    recents.unshift(id);
  } else {
    recents.unshift(id);
    recents.pop();
  }

  return recents;
}

function App() {
  const [recent, setRecent] = useState([{test: "hello"}, {}, {}]);

  useEffect(() => {
    loadRecents();
  }, [])

  async function loadRecents() {
    //Need to setRecent conditionally, so that it only does it if the deck exists.
    //It's very easy to store an ID that doesn't pertain to a deck.
    //All the relevant pages treat that as a given, so make it a given!!!
    //I am so incredibly confused by the order of execution that react is doing on this function.
    //Reads the metadata properly as [1, 3, 4]. Gets to the for loop:
    //1
    //1
    //3
    //3
    //4
    //all done with for loop
    //4
    //all done with for loop
    //I think I get it. It sort of runs the two sequences in parallel, so they alternate steps.
    //The "finishing for loop" thing is kind of glued to the 4 since it doesn't take extra time.
    //Still, can't figure out for the LIFE of me why the state lags behind by an iteration?
    //My absolute best guess, 51 hours after this was meant to be due, is that the process of updating state is also asynchronous.
    //If I get the variable immediately after I update it, of course it's not gonna have gone through yet.
    //I mean it's working now, but I'm pretty annoyed cuz it was having that lag-behind problem a second ago and IDK WHY!!!!
    const recentDecks = [];
    const metadata = await api.getMetadata();
    for (let id of metadata.recentIds) {
      const deck = await api.getDeck(id);
      if (deck) {
        recentDecks.push(deck);
      } else {
        recentDecks.push({});
      }
    }
    setRecent(recentDecks);
  }

  async function reorderRecents(id) {
    //Check the comment in loadRecents :)))
    const recentDecks = []
    const recents = (await api.getMetadata()).recentIds;
    const newRecentIds = updateRecents(id, recents);
    for (let id of newRecentIds) {
      recentDecks.push(await api.getDeck(id));
    }

    console.log(recentDecks);
    console.log(recents);
    setRecent(recentDecks);
    api.putMetadata({recentIds: newRecentIds})
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home recents={recent} sorter={reorderRecents}/>} />
        <Route path="/Decks" element={<Decks sorter={reorderRecents} recentSetter={loadRecents}/>} />
        <Route path="/View" element={<View recents={recent} loadRecents={loadRecents} />} />
        <Route path="/Edit" element={<Edit recents={recent}/>} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
