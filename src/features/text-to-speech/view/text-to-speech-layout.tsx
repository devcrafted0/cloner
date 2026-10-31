import PageHeader from "@/components/page-header";
import { ReactNode } from "react";

const TextToSpeechLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader title="Text to speech" />
      {children}
    </div>
  );
};

export default TextToSpeechLayout;
