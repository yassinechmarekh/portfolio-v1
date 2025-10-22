import { CertificateType } from "@/types";
import Image from "next/image";
import React from "react";

interface CertificateCardProps {
  certificate: CertificateType;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="bg-gray-100 dark:bg-background/80 backdrop-blur-lg border hover:border-slate-700/50 dark:hover:border-cyan-300 rounded-lg hover:shadow-md shadow-slate-700/50 dark:shadow-cyan-300 transition-shadow flex flex-col group">
      <div
        className="border-b border-gray-200/80 rounded-t-lg overflow-hidden"
      >
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={600}
          height={600}
          quality={100}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-sm xs:text-base font-semibold">
          {certificate.title}
        </h3>
        <p className="text-xs xs:text-sm text-black/70 dark:text-white/70 mt-1">
          {certificate.platform}
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;
