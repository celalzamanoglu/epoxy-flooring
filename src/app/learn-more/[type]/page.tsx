import React from "react";
import LearnMorePage from "@/components/LearnMorePage";

interface LearnMorePageProps {
  params: {
    type: string;
  };
}

const LearnMorePageWrapper: React.FC<LearnMorePageProps> = ({ params }) => {
  return <LearnMorePage type={params.type} />;
};

export default LearnMorePageWrapper;
