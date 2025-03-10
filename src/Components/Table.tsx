import IUser from "../inteface";
import { Checkbox } from "antd";
import { Dialog, DialogTitle } from "@mui/material";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { TextField } from "@mui/material";
const Table = ({
  users,
  setUSers,
  statusFilter,
  setStatusFilter,
  filteredData,
  name,
  setName,
  email,
  setEmail,
  open,
  setOpen,
  nameE,
  setNameE,
  edit,
  setEdit,
  emailE,
  setEmailE,
  openE,
  setOpenE,
}: {
  users: IUser[];
  setUSers: (users: IUser[]) => void;
  statusFilter: string;
  setStatusFilter: (statusFilter: string) => void;
  filteredData: IUser[];
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  nameE: string;
  edit: object;
  setNameE: (nameE: string) => void;
  setEdit: (edit: { name: string; email: string; status: boolean }) => void;
  emailE: string;
  setEmailE: (emailE: string) => void;
  openE: boolean;
  setOpenE: (openE: boolean) => void;
}) => {
  function deleteUser(id: number | string) {
    setUSers(users.filter((user) => user.id !== id));
  }
  function checked(id: number | string) {
    setUSers(
      users.map((user) =>
        user.id == id ? { ...user, status: !user.status } : user
      )
    );
  }
  function AddForm(e: React.FormEvent) {
    e.preventDefault();
    let newUser = {
      id: Date.now(),
      name: name,
      email: email,
      status: false,
    };
    setUSers([...users, newUser]);
    setName("");
    setEmail("");
    setOpen(false);
  }
  function editUser(user: IUser) {
    setEdit(user);
    setOpenE(true);
  }
  function EditForm(e: React.FormEvent) {
    e.preventDefault();
    let updateUser = {
      ...edit,
      name: nameE,
      email: emailE,
      status: edit.status,
    };
    setUSers(users.map((user) => (user.id == edit.id ? updateUser : user)));
    setOpenE(false);
  }

  return (
    <div className="">
      <table className="mt-[50px] w-[90%] m-auto border-collapse">
        <thead>
          <tr className="">
            <th className="py-2 px-4 text-left border-b-2 border-gray-600">
              Name
            </th>
            <th className="py-2 px-4 text-left border-b-2 border-gray-600">
              Email
            </th>
            <th className="py-2 px-4 text-start border-b-2 border-gray-600">
              Status
            </th>
            <th className="py-2 px-4 text-center border-b-2 border-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length == 0 ? (
            <h1 className="text-[red] text-[50px] absolute font-bold left-[40%] top-[50%]">
              NOT FOUND
            </h1>
          ) : (
            filteredData.map((user: IUser) => (
              <tr key={user.id} className=" border-b-2 border-gray-600">
                <td className="py-2 px-4 text-left ">{user.name}</td>
                <td className="px-4 py-[15px]">{user.email}</td>
                <td>
                  <p
                    className={`py-[5px] text-center px-4  rounded-md w-[100px] text-white ${
                      user.status ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status ? "Active" : "Inactive"}
                  </p>
                </td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center justify-center gap-4">
                    <DeleteFilled
                      onClick={() => deleteUser(user.id)}
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    />
                    <EditFilled
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                      onClick={() => editUser(user)}
                    />
                    <Checkbox
                      style={{ cursor: "pointer" }}
                      checked={user.status}
                      onChange={() => checked(user.id)}
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>ADD NEW USER</DialogTitle>
        <form
          onSubmit={AddForm}
          className="lg:w-[500px] py-[20px] pt-[20px] lg:h-[300px] bg-[#fff] rounded-4xl"
        >
          <div className="w-[85%] m-auto flex gap-[20px] flex-col">
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              label="Name..."
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="Email..."
            />
            <div className="flex gap-[20px] items-center">
              <button
                type="submit"
                className="bg-blue-500 py-[10px] px-[20px] rounded-md font-bold text-[#fff] cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                className="text-blue-500 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Dialog>
      <Dialog open={openE} onClose={() => setOpenE(false)}>
        <DialogTitle>EDIT USER</DialogTitle>
        <form
          onSubmit={EditForm}
          className="lg:w-[500px] py-[20px] pt-[20px] lg:h-[300px] bg-[#fff] rounded-4xl"
        >
          <div className="w-[85%] m-auto flex gap-[20px] flex-col">
            <TextField
              value={nameE}
              onChange={(e) => setNameE(e.target.value)}
              fullWidth
              label="Name..."
            />
            <TextField
              value={emailE}
              onChange={(e) => setEmailE(e.target.value)}
              fullWidth
              label="Email..."
            />
            <div className="flex gap-[20px] items-center">
              <button
                type="submit"
                className="bg-blue-500 py-[10px] px-[20px] rounded-md font-bold text-[#fff] cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                className="text-blue-500 cursor-pointer"
                onClick={() => setOpenE(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Table;
