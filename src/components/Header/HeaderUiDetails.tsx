"use client";

import useUser from "@/hooks/useUser";
import Link from "next/link";

interface HeaderUiDetailsProps {
  title?: string;
  closeNotification?: () => void;
}

const HeaderUiDetails: React.FC<HeaderUiDetailsProps> = ({
  title,
  closeNotification,
}) => {
  const { user } = useUser();

  const notifactionArr = [
    {
      title: "Notfication",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione explicabo iusto magni quaerat voluptas possimus, teneturcupiditate iste, atque ab rerum ipsam autem magnam minimaaperiam consequuntur debitis harum.",
      link: "/",
      time: "6 Am",
    },
    {
      title: "Notfication",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione explicabo iusto magni quaerat voluptas possimus, teneturcupiditate iste, atque ab rerum ipsam autem magnam minimaaperiam consequuntur debitis harum.",
      link: "/",
      time: "6 Am",
    },
  ];

  const notficationInfo = notifactionArr.map(
    ({ title, message, time, link }, index) => (
      <li key={index}>
        <Link
          className="
              flex
              flex-col
              gap-2.5
              border-t
              border-stroke
              px-4.5
              py-3
              hover:bg-gray-2
              dark:border-strokedark
              dark:hover:bg-meta-4"
          href={link}
          onClick={closeNotification}
        >
          <div className="text-sm">
            <h6
              className="
                text-black
                dark:text-bodydark1"
            >
              {title}
            </h6>
            <p>{message}</p>
            <p className="text-xs mt-1">{time}</p>
          </div>
        </Link>
      </li>
    )
  );

  return (
    <div
      className="
        absolute
        -right-27
        top-10
        mt-2.5
        flex
        h-90
        w-75
        flex-col
        rounded-sm
        border
        border-stroke
        bg-white
        shadow-default
        dark:border-strokedark
        dark:bg-boxdark
        sm:right-0
        sm:w-80"
    >
      <div className="px-4.5 py-3">
        <h5
          className="
            text-sm
            font-medium
            text-bodydark2"
        >
          {title}
        </h5>
      </div>
      <ul
        className="
            flex
            h-auto
            flex-col
            overflow-y-auto
            scroll-smooth"
      >
        {user?._id && notficationInfo}
      </ul>
    </div>
  );
};

export default HeaderUiDetails;
