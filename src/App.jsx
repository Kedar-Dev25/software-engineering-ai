import Header from "./components/Header";
import ArticleHero from "./components/ArticleHero";
import WhyImWritingThis from "./components/WhyImWritingThis";
import TableOfContents from "./components/TableOfContents";
import ArticleSection from "./components/ArticleSection";
import CareerPath from "./components/CareerPath";
import DecisionGuide from "./components/DecisionGuide";
import Resources from "./components/Resources";
import ConnectWithMe from "./components/ConnectWithMe";
import Footer from "./components/Footer";
import ContactButton from "./components/ContactButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <ArticleHero />

        <WhyImWritingThis />

        <div className="article-layout">
          <TableOfContents />

          <div className="article-main">
            <ArticleSection />
            <CareerPath />
            <DecisionGuide />
            <Resources />
            <ConnectWithMe />
          </div>
        </div>
      </main>

      <Footer />

      <ContactButton />
    </>
  );
}

export default App;