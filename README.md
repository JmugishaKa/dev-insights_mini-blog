# Dev Insights — Mini Blog

An internal blog platform prototype for Dev Insights, built using React, TypeScript, and Vite as part of the formative asssignment.

## Usage and installation

This project uses [Vite](https://vitejs.dev/) as the build tool for it's whole scaffold.

```bash
npm install     # To install dependencies
npm run dev     # To start the dev server 
npm run build   # type-check and produce a production build in dist/
npm run preview # preview the production build locally
npm run lint    # run Eslint 
```
The dev server links to a local at http://localhost:5173 to open in the browseer.

## Project structure

```
src/
  components/
    Header.tsx       Header.css    # logo + nav link
    PostList.tsx     PostList.css  # Single post card
    Post.tsx         Post.css      # Renders the post list
  hoc/
    withLogger.tsx   #High-oder component
  App.tsx
  index.css
  main.tsx           
  types.ts            # post interface
```
## Design decisions

### Component types: functional vs. class

1. `Header`, `PostList`, `App` are functional components: they hold no local state or lifecycle needs of their own, so a function is the simplest fit.
2. Post is a class component extending `React.PureComponent`. I chose it purposefully to show class-based components, as discussed from Week 3 in the class modules, and PureComponent gives it automatic shallow prop comparison, which doubles as the app's optimization technique.

### Styling

Two styling methods are used:

- **External CSS files** (`Header.css`, `Post.css`, `PostList.css`) for all
  static, , reusable styling — colors, and typography.baiscally, base styling and layout.

- **Inline styles** in `Post.tsx` for the one style that depends on runtime
  data (whether the post's author matches the `highlightAuthor` prop). This
  keeps the "which color, and why" logic next to the component logic that
  decides it, rather than encoding it into extra CSS classes.

**Conditional styling** appearing twice in `Post.tsx`:

- Posts by the author passed in `App.tsx` (`highlightAuthor="Joshua Mugisha"`)
  render with a highlighted background and left border.
- A red "New!" badge appears next to any post whose `datePosted` is within
  the last 24 hours (check `isNew()` in `Post.tsx`).

### Optimization

- `Post` is wrapped in `React.memo` so it only re-renders when its own
  props (`post`, `highlightAuthor`) change, not whenever `PostList`
  re-renders for an unrelated reason.
- Each `Post` in the list is given a stable `key={post.id}` (not the array
  index), so React can correctly track each item across re-renders.

### Higher-Order Component

`src/hoc/withLogger.tsx` exports `withLogger`, a HOC that wraps a component
and logs to the console when it mounts and unmounts. `withLogger` is implemented as a class component so it can use lifecycle
methods (`componentDidMount` / `componentWillUnmount`) directly, in
contrast to the functional components with hooks used everywhere else in
the project.

## Challenges

Typing the sample post data up front (`types.ts`) made the rest of the app
straightforward — the main adjustment was remembering that `React.memo`
changes what gets exported from `Post.tsx`, so `PostList` imports the
memoized component without needing to know that detail.

## External Libraries used

No new ones added other than,  what Vite's `react-ts` template scaffolds (`react`, `react-dom`, `typescript`, `vite`). No CSS-in-JS library or UI kit was added, to keep the dependency footprint minimal for this assessment.


## Reflection 

Personally, the most challenging aspects of this project were related to git because I learned to make smaller commits (scaffold, types/Header, Post, PostList/HOC/App, README) rather than making one big commit of all changes with git add ., which I almost did. 

Furthermore, I learned to prepare TypeScript interfaces for each Post in advance to benefit from type checking in the editor instead of at run-time when an error might be harder to locate. The biggest learning moment was related to the environment, not the code itself: a file that was supposed to be extracted was not recognized, and VS Code refused to edit it because another instance of npm run dev was running in the background. 

The HOC (Higher-Order Component) pattern also took some time to grasp because it is not obvious how to wrap a component to gain access to logger. In the future, I would like to improve my debugging skills in such environment-related issues and add state to the project so that it would be possible to save posts rather than hard-code them in the application.