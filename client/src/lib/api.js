//Borrowing a lot of Frank's code because it handles errors and stuff better than I could:

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

if (!API_BASE_URL) {
    throw new Error("Could not find VITE_API_BASE_URL");
}

async function fetchJson(path, options) {
    try {
        const response = await fetch(`${API_BASE_URL}${path}`, options);
        if (!response.ok) {
            console.log("couldn't get the goods");
            return;
        }
        return response.json();
    } catch (error) {
        console.log("oh no!!!");
    }
}

export const api = {
    getDecks: () => fetchJson("/decks"),
    getDeck: (id) => fetchJson(`/decks/${id}`),
    getMetadata: () => fetchJson("/metadata/1"),
    postMetadata: (metaObject) => fetchJson("/metadata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(metaObject)
    }),
    putMetadata: (metaObject) => fetchJson("/metadata/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(metaObject)
    }),
    postDeck: (deck) => fetchJson("/decks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(deck)
    }),
    deleteDeck: (id) => fetchJson(`/decks/${id}`, {
        method: "DELETE"
    })
}

export { API_BASE_URL };