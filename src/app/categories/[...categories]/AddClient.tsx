"use client";

import InputStyled from "@/components/shared/InputStyled";
import TotalContainer from "@/components/shared/TotalContainer";

const AddClient = () => {
  return (
    <form className="flex w-full flex-col lg:flex-row justify-center gap-10">
      <TotalContainer className="w-full">
        <div className="flex flex-col gap-3">
          <div>
            <p>Name</p>
            <InputStyled
              className="mt-2"
              id="name"
              bg
              bgDark
              borders
              label="Type name here"
            />
          </div>

          <div>
            <p>Description</p>
            <InputStyled
              input="textarea"
              className="mt-2"
              id="type"
              bg
              bgDark
              borders
              label="Type Description here"
            />
          </div>
        </div>
      </TotalContainer>
      <TotalContainer className="w-full">hi</TotalContainer>
    </form>
  );
};

export default AddClient;
