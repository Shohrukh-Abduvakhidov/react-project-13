import { TextField } from "@mui/material";
import IUser from "../inteface";
const ToolBar = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  setOpen,
}: {
  users: IUser[];
  setUSers: (users: IUser[]) => void;
  search: string;
  setSearch: (search: string) => void;
  statusFilter: string;
  setStatusFilter: (statusFilter: string) => void;
  open:boolean,
  setOpen:(open:boolean) => void
}) => {
  return (
    <>
      <div className="w-[90%] flex m-auto justify-between items-center">
        <div className="flex gap-[30px]">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border cursor-pointer py-[15px] px-[20px] font-bold border-gray-300 p-1  rounded-md"
          >
            <option className="dark:text-[black]">All status</option>
            <option className="dark:text-[black]">Active</option>
            <option className="dark:text-[black]">Inactive</option>
          </select>
        </div>
        <div className="flex gap-[20px] items-center">
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "gray" },
                "&:hover fieldset": { borderColor: "black" },
                "&.Mui-focused fieldset": { borderColor: "gray" },
              },
              "& .MuiInputLabel-root": { color: "gray" },
              "& .MuiInputBase-input": { color: "gray" },
            }}
            fullWidth
            variant="outlined"
            label="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setOpen(true)}
            className="bg-[#2196F3] cursor-pointer text-white  py-[7px] px-[15px] rounded-md"
          >
            + NEW
          </button>
        </div>
      </div>
    </>
  );
};

export default ToolBar;
