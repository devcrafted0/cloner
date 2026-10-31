import TextToSpeechView from "@/features/text-to-speech/view/text-to-speech-view";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Text to speech" };

const Page = () => {
  return <TextToSpeechView />;
};

export default Page;
