import { useCurrentSectionContext } from "@/contexts/current-section-theme";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./interfaces";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setCurrentSection, timeOfLastClick } = useCurrentSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setCurrentSection(sectionName);
    }
  }, [inView, setCurrentSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
};
