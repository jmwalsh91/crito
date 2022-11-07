import { Carousel } from "@mantine/carousel";
import { Card, Title, Text, Grid, Blockquote, Container } from "@mantine/core";
import { Outlet } from "@remix-run/react";
import Backdrop from "~/components/Backdrop";
import Board from "~/components/Surfaces/Board";

export default function Index() {
  return (
    <Backdrop>
        <Container sx={{display: "flex", flexDirection: "column"}}>
        <Title order={1}>Courses.</Title>
        <Outlet />
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
    <Carousel.Slide><Board title="Phthalo" image="/img2.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Tridentata" image="/img3.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Waiting" image="/img4.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Socrates" image="/img5.png"/></Carousel.Slide>
    <Carousel.Slide><Board title="Jesuve" image="/img6.png"/></Carousel.Slide>
    <Carousel.Slide><div style={{
        border: "1px solid black",
        marginTop: "5rem",
        
        
        
        
    }}>
      <Blockquote cite="― Georges Bataille, The Unfinished System of Nonknowledge">“I think that knowledge enslaves us, that at the base of all knowledge there is a servility, the acceptation of a way of life wherein each moment has meaning only in relation to another or others that will follow it.”
</Blockquote>
      </div>
</Carousel.Slide>

   </Carousel>

    <Outlet />
        </Container> 
    </Backdrop>
     
  );
}
