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
    const recentDecks = [];
    const metadata = await api.getMetadata();
    for (let id of metadata.recentIds) {
      const deck = await api.getDeck(id);
      recentDecks.push(deck || {});
    }
    setRecent(recentDecks);
  }

  async function reorderRecents(id) {
    //Check the comment in loadRecents :)))
    const recentDecks = []
    const recents = (await api.getMetadata()).recentIds;
    const newRecentIds = updateRecents(id, recents);
    for (let id of newRecentIds) {
      recentDecks.push(await api.getDeck(id) || {});
    }

    setRecent(recentDecks);
    api.putMetadata({recentIds: newRecentIds});
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home recents={recent} sorter={reorderRecents}/>} />
        <Route path="/Decks" element={<Decks sorter={reorderRecents} recentSetter={loadRecents}/>} />
        <Route path="/View" element={<View recents={recent} loadRecents={loadRecents} />} />
        <Route path="/Edit" element={<Edit recents={recent} recentSetter={loadRecents}/>} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
