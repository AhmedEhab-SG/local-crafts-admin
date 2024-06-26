"use client";

import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import ButtonStyled from "../shared/ButtonStyled";
import { IoMdClose } from "react-icons/io";
import { Trash2 } from "lucide-react";
import InputStyled from "../shared/InputStyled";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { onClose } from "@/store/slice/delete";
import toast from "react-hot-toast";
import { toggleReRender } from "@/store/slice/add-update";
import useDelay from "@/hooks/useDelay";

interface DeleteModelProps {
  deleteFunction: (id?: string, token?: string, target?: any) => any;
}

const DeleteModel: FC<DeleteModelProps> = ({ deleteFunction }) => {
  const open = useSelector((state: RootState) => state.delete.open);

  const [showComponent, setShowComponent] = useDelay(10, open);

  const [isDisabled, setIsDisabled] = useState(true);

  const id = useSelector((state: RootState) => state.delete.id);
  const name = useSelector((state: RootState) => state.delete.name);

  const targetId = useSelector((state: RootState) => state.delete.target);
  const targetName = useSelector((state: RootState) => state.delete.targetName);

  const dispatch = useDispatch();

  const router = useRouter();

  const { user } = useUser();

  const handleClose = useCallback(() => {
    setShowComponent(false);
    setTimeout(() => {
      dispatch(onClose());
    }, 300);
  }, [dispatch, setShowComponent]);

  const handleSubmit = useCallback(async () => {
    try {
      await deleteFunction(id, user?.token, targetId);
      router.refresh();
      targetId !== "governorates" &&
        targetName !== "parent" &&
        dispatch(toggleReRender());
      toast.success("Deleting Success.");
    } catch (error) {
      toast.error("Deleting failed.");
    }
    handleClose();
  }, [
    handleClose,
    dispatch,
    deleteFunction,
    id,
    user,
    router,
    targetId,
    targetName,
  ]);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === id) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    },
    [id]
  );

  return (
    <div
      className={`
        justify-start
        align-center
        overflow-x-hidden
        overflow-y-hidden
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        ${open ? "flex" : "hidden"}`}
    >
      <div
        className="
          relative
          w-4/5
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          
          lg:h-auto
          md:h-auto"
      >
        <div
          className={`
            translate
            duration-300
        
            ${showComponent ? "translate-y-0" : "-translate-y-full"}
            ${showComponent ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              dark:bg-boxdark
              focus:outline-none"
          >
            <div
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-t
                justify-center
                relative
                border-b-[1px]
                border-neutral-600
                "
            >
              <h2 className="text-lg font-semibold">
                Are you sure you want{" "}
                <span className="text-danger">permanently</span> to delete this
                Item?
              </h2>
            </div>
            <p className="relative p-6  text-center">
              This item will be deleted{" "}
              <span
                className="font-bold
                  text-warning"
              >
                permanently
              </span>{" "}
              If you want to delete this item{" "}
              <span className="text-warning font-semibold">{name}</span> which
              has id of{" "}
              <span
                className="
                  font-bold
                  text-danger"
              >
                {id}
              </span>
              , Please type the id of the item to confirm the action.
            </p>
            <div
              className="
                w-full lg:w-2/3
                mx-auto
                px-4
                lg:px-0"
            >
              <InputStyled
                id="delete-item"
                label="Type id to confirm"
                borders
                bgDark
                onChange={handleOnChange}
              />
            </div>
            <div className="flex justify-center items-center gap-2 mt-6 pb-6">
              <ButtonStyled
                SvgIcon={<IoMdClose size={18} />}
                title="Cancel"
                small
                warning
                transparent
                onClick={handleClose}
              />
              <ButtonStyled
                SvgIcon={<Trash2 size={18} />}
                title="Delete"
                small
                danger
                disabled={isDisabled}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
