import React from "react";
import CarouselPlugin from "@/components/carrousel";
import MenuLayout from "@/components/menu-layout";
import MultipleCarousel from "@/components/multiple-carousel";
import Container from "@/components/container";

interface IMain {
  setCalculate: (val: boolean, index: number) => void;
}

const Main: React.FC<IMain> = ({ setCalculate }) => {
  return (
    <>
      <CarouselPlugin />
      <MenuLayout setCalculate={setCalculate} />
      <Container>
        <p className="text-lg my-6 font-semibold">Need More Help ?</p>
        <MultipleCarousel />
      </Container>
      <Container className="mt-6">
        <img
          className="w-full h-[100px] object-contain bg-[#601db8] rounded-lg"
          src="https://www.discountsforteachers.co.uk/media/payday/DFT_Web_Payday-Campaign_landing-page-banner_mobile.png"
          alt="payday-banner"
        />
      </Container>
    </>
  );
};

export default Main;
