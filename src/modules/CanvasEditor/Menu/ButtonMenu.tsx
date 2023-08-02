import React from "react";

const ButtonMenu = ({ onClick, size, name, buttonSelected }: Props) => {
  const selected = buttonSelected === name;
  const classAtr = `col-span-1 m-auto p-2 rounded-xl ${
    selected ? "bg-[#e6e6e6]" : ""
  }`;
  return (
    <button className={classAtr} onClick={onClick}>
      <img src={`/icons/${name}.png`} width={size} height={size} />
    </button>
  );
};

interface Props {
  onClick: (e: any) => void;
  size: number;
  buttonSelected: string;
  name: string;
}

export default ButtonMenu;
