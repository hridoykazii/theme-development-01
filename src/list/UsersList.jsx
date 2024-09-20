import { Box } from "@mui/material";
import { usersList } from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";

const UsersList = memo(({ isOpen }) => {
  // Array of users
  const usersData = [
    {
      id: 1,
      avatarUrl: "https://shorturl.at/hOzNH",
      name: "Carloline Black",
      activeStatus: "active",
      statusTime: 5,
      buttonText: "Add",
    },
    {
      id: 2,
      avatarUrl: "https://shorturl.at/hOzNH",

      name: "John Doe",
      activeStatus: "offline",
      statusTime: 20,
      buttonText: "Invite",
    },
    {
      id: 3,
      avatarUrl: "https://shorturl.at/hOzNH",

      name: "Emily White",
      activeStatus: "away",
      statusTime: 10,
      buttonText: "Connect",
    },
    {
      id: 4,
      avatarUrl: "https://shorturl.at/hOzNH",

      name: "David Green",
      activeStatus: "in-meeting",
      statusTime: 15,
      buttonText: "Add",
    },
    {
      id: 5,
      avatarUrl: "https://shorturl.at/hOzNH",

      name: "Sophia Blue",
      activeStatus: "active",
      statusTime: 1,
      buttonText: "Remove",
    },
  ];
  return (
    <Box>
      <Box className="flex gap-x-4">
        <Lists usersList={true} avatarUrl="https://shorturl.at/hOzNH" name="Carloline Black" activeStatus="active" statusTime={5} buttonText="Add" usersData={usersData} />
      </Box>
      {isOpen && <CodeBlock code={usersList} />}
    </Box>
  );
});

export default UsersList;
