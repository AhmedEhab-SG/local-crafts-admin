"use client";

import Image from "next/image";
import { FC, useState } from "react";
import DynamicRating from "@/utils/DynamicRating";

interface DetailModelProps {
  data: any;
}

const DetailModel: FC<DetailModelProps> = ({ data }) => {
  const [mainPhoto, setMainPhoto] = useState(
    data.photos[0] || "/images/common/no-image.jpg"
  );
  const [otherPhotos, setOtherPhotos] = useState(data.photos.slice(1)) as any[];

  console.log(data);

  return (
    <section className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col items-center gap-3 flex-1">
        <div className="md:min-w-[300px] w-full">
          <Image
            className="rounded-md max-h-[500px]"
            src={mainPhoto}
            alt={data.name}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div
          className="
            flex 
            md:justify-start
            justify-center
            flex-wrap
            gap-3"
        >
          {otherPhotos.map((photo: string, i: number) => (
            <div key={i} className="md:w-[33%] max-h-[300px] w-[46%]">
              <Image
                className="rounded-md"
                src={photo || "/images/common/no-image.jpg"}
                alt={data.name}
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <h2 className="text-title-lg font-bold dark:text-bodydark1 text-black">
          {data.name}
        </h2>
        <div className="dark:text-bodydark2 flex items-center gap-3">
          <span>{data.category.main}</span>
          <span>{data.category.sub}</span>
        </div>

        <p className="font-semibold text-lg">
          {new Intl.NumberFormat("en-EG", {
            style: "currency",
            currency: "EGP",
          }).format(data.price)}
        </p>
        <p className="font-semibold text-lg">{data.description}</p>
        <DynamicRating
          svgClassName="fill-orange-500 w-4 md:w-6 dark:fill-bodydark"
          value={data.avgRating}
        />
      </div>
    </section>
  );
};

export default DetailModel;
