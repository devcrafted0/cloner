import TextToSpeechDetailView from "@/features/text-to-speech/view/text-to-speech-detail-view";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";

const TextToSpeechDetail = async ({
  params,
}: {
  params: Promise<{ generationId: string }>;
}) => {
  const { generationId } = await params;

  prefetch(trpc.voices.getAll.queryOptions());
  prefetch(trpc.generations.getAll.queryOptions());

  prefetch(trpc.generations.getById.queryOptions({ id: generationId }));

  return (
    <HydrateClient>
      <TextToSpeechDetailView generationId={generationId} />
    </HydrateClient>
  );
};

export default TextToSpeechDetail;
