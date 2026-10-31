import { prefetch, HydrateClient, trpc } from "@/trpc/server";
import HealthCheck from "./health-check";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = () => {
  prefetch(trpc.health.queryOptions());

  return (
    <HydrateClient>
      <div>
        <h1>Health check Title</h1>
        <ErrorBoundary fallback={<div>Something went wrong...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <HealthCheck />
          </Suspense>
        </ErrorBoundary>
      </div>
    </HydrateClient>
  );
};

export default Page;
