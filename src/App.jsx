import Header from "./components/Header";
import ArticleHero from "./components/ArticleHero";
import TableOfContents from "./components/TableOfContents";
import ArticleSection from "./components/ArticleSection";
import CareerPath from "./components/CareerPath";
import DecisionGuide from "./components/DecisionGuide";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <ArticleHero />

        <div className="article-layout">
          <TableOfContents />

          <div className="article-main">
            <ArticleSection />
            <CareerPath />
            <DecisionGuide />
            <Resources />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;