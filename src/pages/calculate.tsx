import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Container from "@/components/container";
import FormattedNumberInput from "@/components/formmated-number-input";
import { useState } from "react";
import { CalculatorIcon } from "@/assets/images";
import { ChevronLeft } from "lucide-react";
import DrawerComponets from "@/components/drawer-components";

const FormSchema = z.object({
  totalValues: z.preprocess(
    (val) => Number(val),
    z.number().min(2, {
      message: "Masukan jumlah uang",
    })
  ),
  years: z.preprocess(
    (val) => Number(val),
    z.number().min(1, {
      message: "Masukan lama tahun yang kamu inginkan",
    })
  ),
  currentMoney: z.preprocess((val) => Number(val), z.number()),
  monthlyInvestment: z.preprocess(
    (val) => Number(val),
    z.number().min(2, {
      message: "Masukan investasi bulanan kamu",
    })
  ),
  annualReturnRate: z.preprocess(
    (val) => Number(val),
    z.number().min(1, {
      message: "Masukan persentasi return investasi kamu",
    })
  ),
});

type FormData = z.infer<typeof FormSchema>;
interface ICalculate {
  setCalculate: (val: boolean, index: number) => void;
}

const Calculate: React.FC<ICalculate> = ({ setCalculate }) => {
  const [resCalculate, setResCalculate] = useState<{
    currentMoney?: string;
    monthlyInvestment?: string;
    annualReturnRate?: string;
    investmentDuration?: string;
    totalAccumulatedAmount?: string;
    deficit?: string;
    interestEarned?: string;
    isDeficit?: boolean;
    goalNominal?: string;
  }>({});
  const [resOpen, setResOpen] = useState<boolean>(false);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      annualReturnRate: 0,
      currentMoney: 0,
      monthlyInvestment: 0,
      totalValues: 0,
      years: 0,
    },
  });

  function calculateInvestment(
    goalNominal: number,
    investmentDuration: number,
    monthlyInvestment: number,
    annualReturnRate: number,
    currentSavings: number
  ) {
    let monthlyRate = annualReturnRate / 100 / 12;
    let months = investmentDuration * 12;

    let futureValue = 0;
    for (let i = 1; i <= months; i++) {
      futureValue += monthlyInvestment * Math.pow(1 + monthlyRate, i);
    }

    futureValue += currentSavings * Math.pow(1 + monthlyRate, months);

    let principal = monthlyInvestment * months;
    let interestEarned = futureValue - principal - currentSavings;
    let deficit = goalNominal - futureValue;

    return {
      totalAccumulatedAmount: futureValue,
      deficit: deficit,
      principal: principal,
      interestEarned: interestEarned,
    };
  }

  function onSubmit(data: FormData) {
    let result = calculateInvestment(
      data.totalValues,
      data.years,
      data.monthlyInvestment,
      data.annualReturnRate,
      data.currentMoney
    );

    const formattedResult = {
      currentMoney: `Rp. ${data.currentMoney.toLocaleString().split(".")[0]}`,
      monthlyInvestment: `Rp. ${
        data.monthlyInvestment.toLocaleString().split(".")[0]
      }`,
      annualReturnRate: `${data.annualReturnRate}% / tahun`,
      investmentDuration: `${data.years} tahun`,
      totalAccumulatedAmount: `Rp. ${
        result.totalAccumulatedAmount.toLocaleString().split(".")[0]
      }`,
      deficit: `Rp. ${result.deficit.toLocaleString().split(".")[0]}`,
      interestEarned: `Rp. ${
        result.interestEarned.toLocaleString().split(".")[0]
      }`,
      isDeficit: result.deficit > 0,
      goalNominal: `Rp. ${data.totalValues.toLocaleString().split(".")[0]}`,
    };

    setResCalculate(formattedResult);
    setResOpen(true);
  }

  return (
    <Container className="mt-8">
      <DrawerComponets
        data={resCalculate}
        isOpen={resOpen}
        onClose={setResOpen}
      />
      <div className="flex items-center gap-2 mt-4 mb-6">
        <ChevronLeft
          className="cursor-pointer"
          onClick={() => setCalculate(false, 0)}
        />
        <div className="flex items-center gap-4">
          <img
            src={CalculatorIcon}
            alt="Image"
            className="w-9 h-9 rounded-md object-cover"
          />
          <p className="text-lg font-medium leading-none">
            Kalkulator Investasi
          </p>
        </div>
        <span></span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="totalValues"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah uang yang kamu ingin capai</FormLabel>
                <FormControl>
                  <FormattedNumberInput type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Berapa uang yang ingin kamu capai ?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu mengumpulkan uang ini</FormLabel>
                <div className="grid grid-cols-[4fr,1fr] items-center gap-4">
                  <FormControl>
                    <FormattedNumberInput type="text" {...field} />
                  </FormControl>
                  <FormDescription>tahun lagi</FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentMoney"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Uang yang kamu miliki saat ini sebesar</FormLabel>
                <FormControl>
                  <FormattedNumberInput type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Jumlah uang yang kamu tabung untuk target ini
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monthlyInvestment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target investasimu tiap bulan sebesar</FormLabel>
                <FormControl>
                  <FormattedNumberInput type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Jumlah uang yang akan kamu tambahkan setiap periodenya
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="annualReturnRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Kamu akan investasi di produk yang returnnya
                </FormLabel>
                <div className="grid grid-cols-[4fr,1fr] items-center gap-4">
                  <FormControl>
                    <FormattedNumberInput type="text" {...field} />
                  </FormControl>
                  <FormDescription>%</FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="!mt-10 w-full" type="submit">
            Cari tahu sekarang
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default Calculate;
