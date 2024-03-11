import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  styles: string;
}

const Layout: React.FC<LayoutProps> = ({ children, styles }) => {
  return <div className={styles}>{children}</div>;
};

export default Layout;
