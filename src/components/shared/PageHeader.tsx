"use client";

import Link from "next/link";

interface PageHeaderProps {
  title?: string;
  route?: { name: string; path?: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, route }) => {
  return (
    <div
      className="
      mb-6
      flex
      flex-col
      gap-3
      sm:flex-row
      sm:items-center
      sm:justify-between"
    >
      <h2
        className="
      text-title-md2
      font-semibold
      text-black
      dark:text-white
      "
      >
        {title}
      </h2>
      <nav>
        <ol
          className="
        flex
        items-center
        gap-2"
        >
          {route?.map(({ name, path }, i) => {
            return (
              <li key={name}>
                <Link href={path || "/"}>
                  <span
                    className={`
                        font-medium 
                        ${i === route?.length - 1 && `text-primary`}`}
                  >
                    {name}
                    {i < route?.length - 1 && " /"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default PageHeader;
