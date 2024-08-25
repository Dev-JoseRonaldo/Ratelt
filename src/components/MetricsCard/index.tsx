import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export interface MetricsCardProps {
  title: string
  text: string
  footerText: string
  iconUrl: string
  iconAlt: string
}

export const MetricsCard = ({ title, text, footerText, iconUrl, iconAlt }: MetricsCardProps) => {
  return (
    <Card 
      className="relative bg-card border-none px-6 pt-12 shadow-lg
        before:content-['“'] before:font-bold before:text-5xl before:absolute before:inset-0 before:left-7 before:top-7
        after:content-['“'] after:rotate-180 after:font-bold after:text-5xl after:absolute after:inset-0 after:right-7 after:bottom-7"
      >
      <CardHeader className="flex flex-row gap-12 justify-center align-middle">
        <div className="max-w-72">
          <CardTitle className="text-4xl text-primary font-bold">{title}</CardTitle>
          <CardDescription className="text-2xl text-black font-bold mb-14">{text}</CardDescription>
        </div>
        <Image
          src={iconUrl}
          alt={iconAlt}
          width={128}
          height={109}
          className="max-h-[109px] max-w-32 mt-6"
        />
      </CardHeader>
      <CardFooter>
        <p className="text-xs text-[#A6A6B2]">{footerText}</p>
      </CardFooter>
    </Card>
  )
}