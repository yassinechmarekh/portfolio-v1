import { MapPin } from "lucide-react";
import React from "react";

interface CareerCardProps {
  location: string;
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;
  details?: string[];
}

const CareerCard = ({
  location,
  title,
  subTitle,
  startDate,
  endDate,
  details,
}: CareerCardProps) => {
  return (
    <div className="border-l-2 border-border pl-6">
      <div className={"space-y-1"}>
        <div className="flex items-center gap-1 text-xs xs:text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-lg xs:text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm xs:text-base text-muted-foreground">{subTitle}</p>
          </div>
          <span className="text-xs xs:text-sm text-muted-foreground whitespace-nowrap">
            {startDate} – {endDate}
          </span>
        </div>
      </div>

      {details && (
        <ul className="space-y-2 mt-4 pl-4 list-disc">
          {details.map((detail, i) => (
            <li key={i} className="text-foreground/80">
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CareerCard;
