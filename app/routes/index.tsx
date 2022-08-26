import { Carousel } from "@mantine/carousel";
import { Card, Title, Text, Grid } from "@mantine/core";
import Backdrop from "~/components/Backdrop";
import Board from "~/components/Surfaces/Board";

export default function Index() {
  return (
    <Backdrop>
   <Carousel
   height="40rem"
   slideSize="33.3333%"
   loop
   align="start"
   slidesToScroll={2}
   sx={{
    marginTop: "7rem",
   }}>
    <Carousel.Slide><Board title="Solargoth" image="/img1.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Phtalo" image="/img2.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Tridentata" image="/img3.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Waiting" image="/img4.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Socrates" image="/img5.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Jesuve" image="/img6.png"/></Carousel.Slide>


   </Carousel>


    </Backdrop>
     
  );
}
