"use client";

import ListContainer from "./ListContainer";
import ListDetails from "./ListDetails";
import { CSSProperties, FC, ReactNode, useState } from "react";

interface DashboardSectionProps {
  SvgLogo: ReactNode;
  header: string;
  lists?: { nav: string; title: string }[] | [];
  headerLink: string;
  show?: boolean;
  styles?: CSSProperties;
  dropDwon?: boolean;
}

const DashboardSection: FC<DashboardSectionProps> = ({
  SvgLogo,
  header,
  lists,
  headerLink,
  show,
  dropDwon,
  styles,
}) => {
  const [showLists, setShowLists] = useState(show ? true : false);

  const listToggle = () => {
    setShowLists((prev) => !prev);
  };

  return (
    <ListContainer
      styles={styles}
      onClick={listToggle}
      icon={SvgLogo}
      title={header}
      link={headerLink}
      dropDwon={dropDwon}
    >
      {dropDwon &&
        showLists &&
        lists?.map(({ nav, title }, index) => (
          <ListDetails key={index} nav={nav} title={title} />
        ))}
    </ListContainer>
  );
};

export default DashboardSection;
