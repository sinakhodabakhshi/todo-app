import OptionList from "./components/menu/MenuList";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Filters from "./components/filters/Filters";
import Footer from "./components/Footer";
import ListsSection from "./components/ListsSection";

function App() {
  return (
    <div className="w-screen landscape:flex-row landscape:items-start h-full flex flex-col dark:text-white dark:bg-[#242424] landscape:mx-auto max-w-[950px] lg:landscape:pt-[150px]">
      <div className="sticky top-[-170px] landscape:top-12 z-30 landscape:flex landscape:flex-col-reverse landscape:mx-auto">
        <OptionList />
        <Filters />
      </div>
      <ListsSection />
      <Footer />
    </div>
  );
}

// <TodoList />
export default App;
