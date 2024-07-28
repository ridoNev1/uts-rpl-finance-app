import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import { Wallet } from "lucide-react";
import Main from "./main";
import { useState } from "react";
import Calculate from "./calculate";
import { Button } from "@/components/ui/button";

function App() {
  const [calculate, setCalculate] = useState<{
    isCalculate: boolean;
    activeIndex: number;
  }>({
    isCalculate: false,
    activeIndex: 0,
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <>
        {calculate.isCalculate ? (
          calculate?.activeIndex === 0 ? (
            <Calculate
              setCalculate={(val, indx) =>
                setCalculate({ activeIndex: indx, isCalculate: val })
              }
            />
          ) : (
            <Container className="min-h-96 flex-col gap-10 flex items-center justify-center">
              <span className="font-medium text-muted-foreground text-center">
                Fiturnya masih di kembangin nih ! coba cek fitur yang sudah ada
                di bawah ini
              </span>
              <Button
                onClick={() =>
                  setCalculate({ activeIndex: 0, isCalculate: true })
                }
              >
                Pergi ke kalkulator investasi
              </Button>
            </Container>
          )
        ) : (
          <Main
            setCalculate={(val, indx) =>
              setCalculate({ activeIndex: indx, isCalculate: val })
            }
          />
        )}
      </>
      <div className="border-t-2 max-w-[480px] mx-auto mt-10">
        <Container className="flex items-center justify-between py-4">
          <p className="text-lg font-medium flex items-center gap-2 text-center leading-none">
            <Wallet />
            Awake
          </p>
          <p className="text-sm text-center text-muted-foreground font-medium leading-none">
            © Copyright Student Esa Unggul 2k24
          </p>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
