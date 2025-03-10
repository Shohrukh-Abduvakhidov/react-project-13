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