import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";
import { Button } from "@/components/ui/button";
import { CalculatorIcon } from "@/assets/images";
import { Card } from "@/components/ui/card";

interface IDrawer {
  isOpen: boolean;
  onClose: (val: boolean) => void;
  data: {
    currentMoney?: string;
    monthlyInvestment?: string;
    annualReturnRate?: string;
    investmentDuration?: string;
    totalAccumulatedAmount?: string;
    deficit?: string;
    interestEarned?: string;
    isDeficit?: boolean;
    goalNominal?: string;
  };
}

const DrawerComponets: React.FC<IDrawer> = ({ isOpen, onClose, data }) => {
  return (
    <Drawer open={isOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex items-center gap-4">
              <img
                src={CalculatorIcon}
                alt="Image"
                className="w-9 h-9 rounded-md object-cover"
              />
              <span className="text-lg font-medium leading-none">
                Kalkulator Investasi
              </span>
            </div>
          </DrawerTitle>
          <DrawerDescription>
            <div className="space-y-4 mt-8">
              <Card
                className={`px-6 py-4 space-y-2 ${
                  data?.isDeficit ? "bg-red-500" : "bg-green-500"
                }`}
              >
                <p className="font-medium leading-none text-white">
                  {data?.isDeficit
                    ? `Uang kamu masih kurang ${data?.deficit}`
                    : "Strategi kamu cocok"}
                </p>
              </Card>
              <Card className="px-6 py-4 space-y-2">
                <p className="font-medium text-xs text-muted-foreground leading-none">
                  Total uang yang kamu butuhkan
                </p>
                <p className="font-medium leading-none">{data?.goalNominal}</p>
              </Card>
              <p className="font-medium leading-none">Hasil Investasi</p>
              <Card className="px-6 space-y-2">
                <div className="space-y-2 pb-4 pt-4 px-2 border-b-2">
                  <p className="font-medium text-xs text-muted-foreground leading-none">
                    Uangmu saat ini
                  </p>
                  <p className="font-medium leading-none">
                    {data?.currentMoney}
                  </p>
                </div>
                <div className="space-y-2 pb-4 px-2 border-b-2">
                  <p className="font-medium text-xs text-muted-foreground leading-none">
                    Jumlah investasi / bulan
                  </p>
                  <p className="font-medium leading-none">
                    {data?.monthlyInvestment}
                  </p>
                </div>
                <div className="space-y-2 pb-4 px-2 border-b-2">
                  <p className="font-medium text-xs text-muted-foreground leading-none">
                    Return investasi
                  </p>
                  <p className="font-medium leading-none">
                    {data?.annualReturnRate}
                  </p>
                </div>
                <div className="space-y-2 pb-4 px-2 border-b-2">
                  <p className="font-medium text-xs text-muted-foreground leading-none">
                    Lama investasi
                  </p>
                  <p className="font-medium leading-none">
                    {data?.investmentDuration}
                  </p>
                </div>
                <div className="space-y-2 pb-4 px-2">
                  <p className="font-medium text-xs text-muted-foreground leading-none">
                    Hasil investasi
                  </p>
                  <p className="font-medium leading-none">
                    {data?.totalAccumulatedAmount}
                  </p>
                </div>
              </Card>
            </div>
          </DrawerDescription>
          <DrawerFooter>
            <Button variant="outline" onClick={() => onClose(false)}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponets;
