import { Separator } from "@/components/UI/Separator";
import { getRandomTailwindTextColor } from "@/utilities/stylingUtil";
import { TextSelect } from "lucide-react";

type TokenDisplaySectionProps = {
  tokenIcon: string;
  tokenSymbol: string;
  tokenName: string;
};

const TokenDisplaySection = ({
  tokenIcon,
  tokenSymbol,
  tokenName,
}: TokenDisplaySectionProps) => {
  const icon = tokenIcon;
  const symbol = tokenSymbol;
  const name = tokenName;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6">
        {!!icon ? (
          <img className="h-16 w-16" src={icon} />
        ) : (
          <span className={getRandomTailwindTextColor(symbol)}>
            <TextSelect size={64} />
          </span>
        )}
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{symbol}</div>
          <div className="text-lg">{name}</div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default TokenDisplaySection;
