import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../components/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { todoTypes } from "../../redux/todoRedux";
import { Button, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TicketList from "./components/TicketList";

export default function VerticalTabs() {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: any) => {
    return {
      todoList: state.todo?.todoList,
    };
  });

  const handleSubmitNewTicket = () => {
    const now = new Date();
    let newKey = now.getTime();

    const newTicket = {
      id: newKey,
      name: "New Ticket",
      content: "",
      createdAt: now,
      updatedAt: now,
      isComplete: false,
    };
    dispatch({ type: todoTypes.CREATE_TICKET, ticket: newTicket });
  };

  const handleEditTicket = (ticket: any) => {
    const now = new Date();

    const updatedTicket = {
      ...ticket,
      updatedAt: now,
    };
    dispatch({ type: todoTypes.UPDATE_TICKET, ticket: updatedTicket });
  };

  const handleDeleteTicket = (ticket: any) => {
    dispatch({ type: todoTypes.DELETE_TICKET, ticket });
  };

  const handleDeleteAll = () => {
    dispatch({ type: todoTypes.DELETE_ALL_TICKET });
  };

  return (
    <div>
      <Box sx={{ padding: 1 }}>
        <Button variant="contained" onClick={handleSubmitNewTicket}>
          <AddIcon />
          {`New Ticket`}
        </Button>
      </Box>
      <TicketList
        data={todoList}
        handleEdit={handleEditTicket}
        handleDelete={handleDeleteTicket}
      />
    </div>
  );
}
