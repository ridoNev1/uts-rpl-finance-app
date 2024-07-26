import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/container";
import { imagesIcon } from "@/assets/images";

const MenuLayout: React.FC = () => {
  return (
    <Container>
      <p className="text-lg my-6 font-semibold">Find Our Solution</p>
      <div className="grid grid-cols-4 gap-4">
        {imagesIcon.map((el, indx) => (
          <Card key={indx} className="dark:bg-[#3d3d3d]">
            <CardContent className="flex flex-col gap-2 p-0 aspect-square items-center justify-center">
              <img
                src={el.image}
                alt="Image"
                className="w-9 h-9 rounded-md object-cover"
              />
              <p className="text-[10px] font-medium text-center leading-none">
                {el.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MenuLayout;
