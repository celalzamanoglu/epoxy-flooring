import { Metadata } from "next";
import LearnMorePage from "@/components/LearnMorePage";
import { learnMoreMetadataMap } from "@/lib/learnMoreMetadata";

interface LearnMorePageProps {
  params: Promise<{
    type: string;
  }>;
}

export async function generateMetadata({ params }: LearnMorePageProps): Promise<Metadata> {
  const { type } = await params;
  const meta = learnMoreMetadataMap[type] ?? {
    title: "Learn More | Milkyway Epoxy",
    description: "Explore our flooring and garage solutions.",
    canonical: `https://milkywayepoxy.com/learn-more/${type}`,
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
  };
}

const LearnMorePageWrapper: React.FC<LearnMorePageProps> = async ({ params }) => {
  const { type } = await params;
  return <LearnMorePage type={type} />;
};

export default LearnMorePageWrapper;
