# Project 3: The Second Coming of Fonty's Flashcards

## Introduction

Hello there! This project is a direct successor to my previous iteration of **"Fonty's Flashcards"**. It's a simple site for creating and managing decks of flashcards, which can now be modified directly on-site. The central motivations for this site are for me to get some practice with the following tools:

- React
- React Router
- React Bootstrap
- Json-server **(POST/PUT/DELETE)**
- Server/client code structure
- Deployment w/ **Vercel** and **Render**

This is on top of the usual tools from before, being **HTML/CSS/JS** and all. I have a decent feel for this workflow vs. the old one, and I can understand the reasoning for each. React is nice, and I plan to practice with it more, but migrating an old project to React feels trickier than just building one from the ground up. Lots of problem solving, especially with async/states/bootstrap, but that's allowed me to learn a ton about Reacts inner workings. Very cool!

## User Guide

These projects usually require at least three user stories, so here they are!

1. *As part of a friend group, I want a site to view trivia about myself on, to quiz my friends.*
2. *As a student, I want the ability to easily create, modify, and remove the decks of cards I make.*
3. *As an avid Fonty user, I'd like a page to keep me informed on the team's future plans for the site.*

The project wireframes are mostly borrowed from project 2, since the two projects share the same concept. The only new addition is the "edit" site.

### Home

As with many homepages before, this one's primary purpose is to show you the site's main features. The **Jump Back In** section shows the three most recently-tinkered-with decks, which is tracked by **db.json**.

A similar widget is below, offering three buttons for convenient navigation. The first simply links to the **Decks** page, and the second to the **Edit** page after making a new deck for you. The third routes to **Categories**, which serves as a way to organize your decks.

> NOTE: If one of the recent three decks is deleted, it will instead show a blank deck. If less than three decks exist, it will fill in the gaps with these blank decks. This is a band-aid solution, as it prevents this section from showing the *true* recents! Longer-term plans for this are in the **Future Endeavors** section of this readme.

> NOTE: Categories do not exist yet!

### Decks

This page simply shows every existing deck, along with the option to make a new one. For each, you are given the option to either modify or delete via the yellow and red buttons.

### Edit

This page is the most complicated one so far! You'll be redirected here after clicking the "edit" button on a deck of your choosing in the **Decks** page. You'll be presented with the current name, category, and description of that deck. You can use the button in the top-left to modify these values.

As for the questions themselves, each should appear in its own row. From left to right, the row displays question number, the card's front side, its back side, and the buttons to edit/remove it.

At the bottom of the page are two more buttons. The first is the "add new card" button, which does so as advertised. The second is your "save" button, which redirects you to the **View** page on that specific deck. Until that button is pressed, absolutely **NONE** of the changes you make here will be tracked! That even includes the name/category/description from earlier, which might seem disjointed from the real save button.

### Settings

This will be a form-like page, allowing you to modify site-wide variables:

- light/dark mode
- only show **starred** questions
- show front/back first by default

> NOTE: Settings do not exist yet!

### View

View is the page in which you flip through the cards in a specific deck. You can click on the card itself to toggle between front/back. Use the two buttons below a card to switch to the previous/next card, and take note of each card's **order number** in the bottom right! Each button can be pressed forever, meaning that the deck loops back to the opposite end when the order number rolls over or goes negative.

### PageNotFound/Upcoming

This is where you're routed if you try to access a page that doesn't exist. It also serves as a little developer to-do list, where you can see the plans for the website! These are currently hardcoded into the HTML, but would do nicely within db.json or something.

## Github Guide

The bulk of this project is contained within the **client** folder, where all of the frontend lives. 

**Public/** contains the image assets used on the site, as well as my reference wireframes.

**src/** is where all of the code for the site lives, partitioned into tidy little subfolders!

-**components/**: The site's JSX building blocks.
-**pages/**: Larger-scale JSX, used in *app.jsx*.
-**lib/**: The labyrinth housing *api.js*, which handles fetch calls.
-**styling/**: Stylesheets for the site.

## Future Endeavors

- Settings page
- Categories page
- Replacing "recents" state with a useContext thing.
- Store the "recent activity" indices for all decks, not just three.
- Ability to star certain cards
- Quiz functionality
- Employing "useEffect" more properly, as I didn't fully understand it until ~60% of the pages were done.
- Employing react-bootstrap more properly, for similar reasons.

## Parting Notes

While juggling React with everything else, I'd forgotten to even make a repository for this project until I'd fully imported project 2's features.
Therefore the commit history starts much later than it should. Oops!
