import Section from "@/components/ui_palette/Section";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <Section isBanner>
        <h1>4😲4 Not Found</h1>
        <p className="mt-8 font-normal">
          Sorry the page doesn&apos;t exist. Go back{" "}
          <Link to="/" className="underline">
            Home
          </Link>{" "}
          ?
        </p>
      </Section>
    </>
  );
};

export default Page404;
