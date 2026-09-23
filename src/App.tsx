import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="app">
      <Header />
      {/* Conditional styling demo: posts by "Joshua Mugisha" render highlighted */}
      <PostList highlightAuthor="Joshua Mugisha" />
    </div>
  );
}

export default App;
