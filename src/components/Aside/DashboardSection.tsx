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
  delay?: boolean;
  ref?: any;
  liClassName?: string;
  divClassName?: string;
}

const DashboardSection: FC<DashboardSectionProps> = ({
  SvgLogo,
  header,
  lists,
  headerLink,
  show,
  dropDwon,
  styles,
  liClassName,
  divClassName,
  delay,
}) => {
  const [showLists, setShowLists] = useState(show ? true : false);

  const listToggle = () => {
    setShowLists((prev) => !prev);
  };
  return (
    <ListContainer
      divClassName={divClassName}
      liClassName={liClassName}
      delay={delay}
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
