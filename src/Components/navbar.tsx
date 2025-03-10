import { useState } from "react";
const Navbar = ({ handleClick }: { handleClick: () => void }) => {
    const [theme,setTheme] = useState<string | null>(localStorage.getItem("theme") || "dark")
  return (
    <>
      <div className="flex m-auto w-[90%] py-[10px] items-center justify-between">
        <h1 className="text-[30px] font-bold">User List</h1>
        <button
          onClick={handleClick}
          className="border rounded-md px-[20px] cursor-pointer py-[5px]"
        >
          Mode
        </button>
      </div>
    </>
  );
};

export default Navbar;
