"use client";

import { FC, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import { ClipLoader } from "react-spinners";
import { MdChangeCircle } from "react-icons/md";
import toast from "react-hot-toast";

interface ChangeStatusProps {
  status: boolean;
  requestFunction: (id: string, body: any, token?: string) => Promise<any>;
  id: string;
}

const ChangeStatus: FC<ChangeStatusProps> = ({
  status,
  requestFunction,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const onClickHandler = useCallback(async () => {
    try {
      setLoading(true);
      await requestFunction(id, { approved: !status }, user?.token);
      setLoading(false);
      router.refresh();
      toast.success("Change Success.");
    } catch (e) {
      toast.error("Change Failed.");
      setLoading(false);
    }
  }, [requestFunction, router, status, user?.token, id]);

  return (
    <div className="flex gap-3 items-center">
      <p>{status ? "Approved" : "Not Approved"}</p>
      <button
        onClick={onClickHandler}
        disabled={loading}
        className="
            dark:bg-bodydark2 
            bg-boxdark
            rounded-md 
            dark:text-black 
            text-white
            font-semibold 
            px-2 py-1"
      >
        <div className="flex items-center gap-1">
          {loading ? (
            <>
              <ClipLoader size={15} />
              loading
            </>
          ) : (
            <>
              <MdChangeCircle size={15} />
              Change
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default ChangeStatus;
