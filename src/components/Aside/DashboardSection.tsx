"use client";

import ListContainer from "./ListContainer";
import ListDetails from "./ListDetails";
import { FC, ReactNode, useState } from "react";

interface DashboardSectionProps {
  SvgLogo: ReactNode;
  header: string;
  lists?: { nav: string; title: string }[];
  headerLink: string;
  show?: boolean;
}

const DashboardSection: FC<DashboardSectionProps> = ({
  SvgLogo,
  header,
  lists,
  headerLink,
  show,
}) => {
  const [showLists, setShowLists] = useState(show ? true : false);

  const listToggle = () => {
    setShowLists((prev) => !prev);
  };

  return (
    <ListContainer
      onClick={listToggle}
      icon={SvgLogo}
      title={header}
      link={headerLink}
    >
      {showLists &&
        lists?.map(({ nav, title }, index) => (
          <ListDetails key={index} nav={nav} title={title} />
        ))}
    </ListContainer>
  );
};

export default DashboardSection;
