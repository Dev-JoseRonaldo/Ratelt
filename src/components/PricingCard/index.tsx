import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckIcon, DotFilledIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface Tab {
  value: string;
  label: string;
  content: Feature[];
}

interface Feature {
  check: boolean;
  description: string;
}

interface PricingCardProps {
  title: string;
  currency: string;
  value: number;
  type: 'MONTHLY' | 'YEARLY' | 'ONETIMEPAYMENT' | 'FREE';
  features?: Feature[];
  featured?: boolean;
  actionMessage: string;
  tabs?: Tab[];
}

const PricingCard = ({
  title,
  currency,
  value,
  type,
  features = [],
  featured = false,
  actionMessage,
  tabs = [],
}: PricingCardProps) => {
  return (
    <Card
      className={`border-primary w-full flex flex-col justify-between lg:w-[300px] lg:max-w-[300px] lg:min-w-[300px] bg-white ${featured && 'bg-primary text-white shadow-lg shadow-primary/50 lg:w-[350px] lg:max-w-[350px] lg:min-w-[350px] z-50'}`}
    >
      <CardHeader className="text-center pb-2">
        <CardTitle className="mb-3 text-2xl font-black">{title}</CardTitle>
        <div className="relative w-fit mx-auto">
          <span
            className={`text-sm text-muted-foreground absolute -left-2 ${featured && 'text-white/90'}`}
          >
            {currency}
          </span>
          <span className={`font-black text-5xl ${featured && 'text-6xl'}`}>
            {value}
          </span>
          <span
            className={`text-sm text-muted-foreground absolute -right-4 bottom-0 ${featured && 'text-white/90'}`}
          >
            {type === 'MONTHLY' && '/m'}
            {type === 'YEARLY' && '/y'}
            {type === 'FREE' && ''}
            {type === 'ONETIMEPAYMENT' && ''}
          </span>
        </div>
      </CardHeader>
      <CardContent className="relative pb-0 pt-2">
        {tabs.length > 0 ? (
          <PricingTabs tabs={tabs} />
        ) : (
          features.length > 0 && (
            <ul
              className={`space-y-1.5 text-sm flex flex-col justify-center font-semibold overflow-auto ${featured && 'text-white'}`}
            >
              {features.map((feature: Feature, index) => (
                <li className="flex items-start space-x-2" key={index}>
                  {feature.check ? (
                    <CheckIcon className="flex-shrink-0 h-6 w-6" />
                  ) : (
                    <Cross2Icon className="flex-shrink-0 h-5 w-5 ml-[1px]" />
                  )}
                  <span>{feature.description}</span>
                </li>
              ))}
            </ul>
          )
        )}
        <div
          className={`absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent pointer-events-none ${featured ? '!to-primary border-4 border-primary' : 'to-white'}`}
        ></div>
      </CardContent>
      <CardFooter className={`flex flex-col ${featured && 'pb-5'}`}>
        <div className="flex items-center -space-x-2 mb-2">
          <DotFilledIcon />
          <DotFilledIcon />
          <DotFilledIcon />
        </div>
        <Button
          label={actionMessage}
          size={'lg'}
          className={`w-9/12 shadow-xl rounded-xl h-[52px] ${featured && 'h-[58px]'}`}
          variant={featured ? 'secondary' : 'default'}
        />
      </CardFooter>
    </Card>
  );
};

const PricingTabs = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <div className="w-full max-w-[200px] mx-auto mb-6">
        <TabsList className="rounded-sm">
          {tabs.map((tab: Tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab: Tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <ul className="space-y-1.5 text-sm flex flex-col justify-center font-semibold overflow-auto">
            {tab.content.map((feature: Feature, index) => (
              <li className="flex items-start space-x-2" key={index}>
                {feature.check ? (
                  <CheckIcon className="flex-shrink-0 h-6 w-6" />
                ) : (
                  <Cross2Icon className="flex-shrink-0 h-5 w-5 ml-[1px]" />
                )}
                <span>{feature.description}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PricingCard;
