"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const HealthCheck = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.health.queryOptions());
  return (
    <div>
      {data.code} {data.status}
    </div>
  );
};

export default HealthCheck;
