import EventCard from "../Components/cards/EventCard"
import CompanyCard from "../Components/cards/candidate/CompanyCard"
import EventForm from "../Components/cards/company/EventForm"
import PriceCard from "../pages/landing/cards/PriceCard"
import OneFullCard from "./OneFullEvent"


export default function Events() {
  return (
    <>
      {/* <h1>This is events page</h1> */}
      {/* <PriceCard></PriceCard> */}
      {/* <EventCard></EventCard> */}
      {/* <EventForm></EventForm> */}
      {/* <OneFullCard></OneFullCard> */}
      <CompanyCard
        title="Creative Software"
        paragraph="Creative Software is a pioneer and leader in Sri Lanka’s software industry with expertise in the rapidly growing and evolving tech ecosystems of Scandinavia and beyond. We specialize in building and managing dedicated"
        imageUrl="https://global-uploads.webflow.com/635813c46b5aa1b7a5b5ec14/641d76e8d3455bbd533433ad_Creative%20website%20logo%2072%20dpi-52.png"
      />
    </>
  );
}
