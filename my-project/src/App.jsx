import Accordian from "./components/accordian"
import MultiSelectionAccordian from "./components/accordian/MultipleSelection"
import RandomColor from "./components/random-color"
import BgChanger from "./components/random-color/BgChanger"
import StarRating from "./components/star-rating"

const App = () => {
  return (
    <div>
      {/* <Accordian/>
      <MultiSelectionAccordian/> */}

      {/* <RandomColor/> */}
      {/* <BgChanger/> */}

      <StarRating noOfStars={10}/>

    </div>
  )
}

export default App