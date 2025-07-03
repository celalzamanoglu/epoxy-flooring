import React from "react";
import LearnMorePage from "@/components/LearnMorePage";

interface LearnMorePageProps {
  params: Promise<{
    type: string;
  }>;
}

const LearnMorePageWrapper: React.FC<LearnMorePageProps> = async ({ params }) => {
  const { type } = await params;
  return <LearnMorePage type={type} />;
};

export default LearnMorePageWrapper;
