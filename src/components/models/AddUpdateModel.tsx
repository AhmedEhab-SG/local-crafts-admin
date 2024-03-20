"use client";

import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import ButtonStyled from "../shared/ButtonStyled";
import { IoMdClose } from "react-icons/io";
import { Trash2 } from "lucide-react";
import InputStyled from "../shared/InputStyled";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { onCloseAction, toggleReRender } from "@/store/slice/add-update";
import toast from "react-hot-toast";
import { BiAddToQueue } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { pascalCase } from "@/utils/functions";

interface AddUpdateModelProps {
  updateFunction: (
    target: any,
    body: any,
    categoryOrSubId: string,
    token?: string
  ) => any;

  addFunction: (target: any, body: any, token: any, categoryId: any) => any;
}

const AddUpdateModel: FC<AddUpdateModelProps> = ({
  updateFunction,
  addFunction,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [value, setValue] = useState("");

  const action = useSelector((state: RootState) => state.addUpdate.action);

  const parent = useSelector((state: RootState) => state.addUpdate.parent);

  const open = useSelector((state: RootState) => state.addUpdate.open);

  const id = useSelector((state: RootState) => state.addUpdate.id);

  const name = useSelector((state: RootState) => state.addUpdate.name);

  const target = useSelector((state: RootState) => state.addUpdate.target);

  const dispatch = useDispatch();

  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    setTimeout(() => {
      setShowModal(open);
    }, 10);
  }, [open]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      dispatch(onCloseAction());
    }, 300);
  }, [dispatch]);

  const handleSubmit = useCallback(async () => {
    const body = { name: value };
    const subBody = [value];
    try {
      action === "edit" &&
        (await updateFunction(target, body, id, user?.token));
      action === "add" &&
        (await addFunction(parent.target, subBody, user?.token, parent._id));

      console.log("action", target);

      parent.target !== "governorates" && dispatch(toggleReRender());

      router.refresh();
      toast.success("Action Success.");
    } catch (error) {
      toast.error("Action failed.");
    }
    handleClose();
  }, [
    handleClose,
    parent._id,
    action,
    parent.target,
    updateFunction,
    addFunction,
    user,
    router,
    value,
    id,
    target,
    dispatch,
  ]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, []);

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
        
            ${showModal ? "translate-y-0" : "-translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}`}
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
                Type your new{" "}
                <span
                  className={
                    action === "edit" ? "text-warning" : "text-success"
                  }
                >
                  {action.toUpperCase()}
                </span>{" "}
                value
              </h2>
            </div>
            <p className="relative p-6  text-center">
              This item will be{" "}
              <span
                className={`font-bold ${
                  action === "edit" ? "text-warning" : "text-success"
                }`}
              >
                {pascalCase(action)}ed
              </span>{" "}
              {action === "edit" && (
                <>
                  {" "}
                  If you want to update this item{" "}
                  <span className="text-warning font-semibold">
                    {name}
                  </span>{" "}
                  which has id of{" "}
                  <span
                    className="
                  font-bold
                  text-warning"
                  >
                    {id}
                  </span>
                </>
              )}
              , Please type the new name of the item to confirm the action.
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
                label={`Type the ${action} to confirm`}
                borders
                bgDark
                onChange={handleOnChange}
              />
            </div>
            <div className="flex justify-center items-center gap-2 mt-6  pb-6">
              <ButtonStyled
                SvgIcon={<IoMdClose size={18} />}
                title="Cancel"
                small
                primary
                transparent
                onClick={handleClose}
              />
              <ButtonStyled
                SvgIcon={
                  action === "add" ? (
                    <BiAddToQueue size={18} />
                  ) : (
                    <MdUpdate size={18} />
                  )
                }
                title={pascalCase(action)}
                small
                success={action === "add"}
                warning={action === "edit"}
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

export default AddUpdateModel;
