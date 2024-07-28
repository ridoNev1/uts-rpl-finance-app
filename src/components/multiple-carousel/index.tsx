import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const data = [
  {
    name: "Andika Example People",
    no: "2100 0000",
    description:
      "Perencanaan keuangan mandiri, Peningkatan arus keuangan, Reksa dana, Investasi saham, Wealth management",
    image:
      "https://cdn.pixabay.com/photo/2023/09/09/20/37/ai-generated-8243822_960_720.jpg",
  },
  {
    name: "Luna Example People",
    no: "2100 0001",
    description: "Manajemen Utang, Arus Kas, Dana Pensiun, Asuransi",
    image: "https://www.img2go.com/assets/dist/images/realistic.fdc4cd3d.jpg",
  },
  {
    name: "Michael Example People",
    no: "2100 0002",
    description:
      "Asuransi Syariah, Investasi Syariah, Arus Kas, Dana Pendidikan",
    image:
      "https://cdn.pixabay.com/photo/2024/01/08/20/29/ai-generated-8496294_640.jpg",
  },
  {
    name: "Stephen Example People",
    no: "2100 0003",
    description: "Properti, KPR, Perbankan, Investasi",
    image:
      "https://img.freepik.com/premium-photo/photo-successful-asian-businessman-office-suit-street-near-business-center_911620-11750.jpg?w=360",
  },
];

export default function MultipleCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-[90vw]"
    >
      <CarouselContent>
        {data.map((el, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="pt-4">
                <CardContent className="grid gap-4">
                  <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <Avatar>
                      <AvatarImage
                        src={el.image}
                        alt="@shadcn"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {el.name}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">
                        no CFP : {el.no}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr,4fr]">
                    <p className="text-sm items-center font-medium leading-none">
                      Keahlian :
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {el.description}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      (window.location.href = "https://wa.me/081217873551")
                    }
                  >
                    <Phone className="mr-2 h-4 w-4" /> Hubungi Sekarang
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="mr-8" />
    </Carousel>
  );
}
