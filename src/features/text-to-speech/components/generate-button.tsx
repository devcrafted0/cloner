import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface GenerateButtonProps {
  size?: "default" | "sm";
  className?: string;
  onSubmit: () => void;
  isSubmitting: boolean;
  disabled: boolean;
}

const GenerateButton = ({
  size,
  className,
  onSubmit,
  isSubmitting,
  disabled,
}: GenerateButtonProps) => {
  return (
    <Button
      size={size}
      className={className}
      onClick={onSubmit}
      disabled={disabled}
    >
      {isSubmitting ? (
        <>
          <Spinner className="size-3" />
          Generating...
        </>
      ) : (
        "Generate speech"
      )}
    </Button>
  );
};

export default GenerateButton;
