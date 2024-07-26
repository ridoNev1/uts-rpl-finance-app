import React from "react";
import { useTheme } from "@/components/theme-provider";
import Container from "@/components/container";
import { Moon, Sun, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="bg-card">
      <Container>
        <>
          <div className="flex justify-between items-center py-4">
            <h3 className="scroll-m-20 flex gap-2 items-center text-2xl font-semibold tracking-tight">
              <Wallet />
              <span>Awake</span>
            </h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => {
                  theme !== "dark" ? setTheme("dark") : setTheme("light");
                }}
              >
                {theme === "dark" ? (
                  <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                ) : (
                  <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                )}
              </Button>
            </div>
          </div>
        </>
      </Container>
    </div>
  );
};

export default Navbar;
