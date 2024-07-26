import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import CarouselPlugin from "@/components/carrousel";
import Container from "@/components/container";
import MenuLayout from "@/components/menu-layout";
import MultipleCarousel from "@/components/multiple-carousel";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <CarouselPlugin />
      <MenuLayout />
      <Container>
        <p className="text-lg my-6 font-semibold">Need More Help ?</p>
        <MultipleCarousel />
      </Container>
      <Container className="mt-6">
        <img
          className="w-full h-[100px] object-cover rounded-lg"
          src="https://www.discountsforteachers.co.uk/media/payday/DFT_Web_Payday-Campaign_landing-page-banner_mobile.png"
          alt="payday-banner"
        />
      </Container>

      <div className="border-t-2 mt-10">
        <Container className="flex items-center justify-between py-4">
          <p className="text-lg font-medium text-center leading-none">Fin</p>
          <p className="text-sm text-center leading-none">
            Copyright Student Esa Unggul 2k24
          </p>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
