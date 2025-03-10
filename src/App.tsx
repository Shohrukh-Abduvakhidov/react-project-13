import { useEffect, useState } from "react";
import IUser from "./inteface";
import Navbar from "./Components/navbar";
import Table from "./Components/Table";
import ToolBar from "./Components/tool-bar";
const App = () => {
  const data: IUser[] = [
    {
      id: 1,
      name: "Shohrukh Abduvakhidov",
      email: "shoxa_011@gmail.com",
      status: true,
    },
    {
      id: 2,
      name: "Muhsin Behbudov",
      email: "Muhsin_011@gmail.com",
      status: false,
    },
    {
      id: 3,
      name: "Azizova Rayhona",
      email: "Azizova@gmail.com",
      status: true,
    },
    {
      id: 4,
      name: "Bushra Tarakhil",
      email: "Bushra_011@gmail.com",
      status: false,
    },
    {
      id: 5,
      name: "John Doe",
      email: "John_011@gmail.com",
      status: true,
    },
  ];
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>(data);
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [nameE, setNameE] = useState<string>("");
  const [emailE, setEmailE] = useState<string>("");
  const [edit, setEdit] = useState<{ name: string; email: string, status : boolean }>({
    name: "",
    email: "",
    status : false,
  });
  const [statusFilter, setStatusFilter] = useState<string>("All status");
  const [openE, setOpenE] = useState<boolean>(false);
  useEffect(() => {
    setNameE(edit.name);
    setEmailE(edit.email);
  }, [edit]);
  function handleClick() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }
  const filteredData = users.filter((user) => {
    const matchesStatus =
      statusFilter === "All status" ||
      (statusFilter === "Active" ? user.status : !user.status);
    const searching = JSON.stringify(user)
      .toLowerCase()
      .trim()
      .includes(search.toLowerCase().trim());
    return matchesStatus && searching;
  });
  return (
    <>
      <Navbar handleClick={handleClick}  />
      <ToolBar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        users={users}
        setUSers={setUsers}
        open={open}
        setOpen={setOpen}
      />
      <Table
        users={users}
        setUSers={setUsers}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        filteredData={filteredData}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        open={open}
        setOpen={setOpen}
        nameE={nameE}
        setNameE={setNameE}
        emailE={emailE}
        setEmailE={setEmailE}
        edit={edit}
        setEdit={setEdit}
        openE={openE}
        setOpenE={setOpenE}
      />
    </>
  );
};

export default App;
