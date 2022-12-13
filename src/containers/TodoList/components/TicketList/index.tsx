import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../../../../components/TabPanel";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TicketListProps {
  data: any;
  handleEdit(ticket: any): void;
  handleDelete(ticket: any): void;
}

export default function TicketList(props: TicketListProps) {
  const { data, handleEdit, handleDelete } = props;

  const [value, setValue] = React.useState(0);
  const [selectedTicket, setSelectedTicket] = React.useState(
    data ? data[value] : null
  );

  const onChangeValue = (fieldName: string, value: string) => {
    setSelectedTicket({
      ...selectedTicket,
      [fieldName]: value,
    });
  };

  const handleChangeTab = (event: React.SyntheticEvent, index: number) => {
    setValue(index);
    setSelectedTicket(data[index]);
  };

  return (
    <div>
      <Box sx={{ bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChangeTab}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {data.map((ticket: any, index: number) => (
            <Tab label={ticket?.name} {...a11yProps(index)} />
          ))}
        </Tabs>
        {data.map((ticket: any, index: number) => (
          <TabPanel  value={value} index={index}>
            <Box sx={{ padding: 1 }}>
              <TextField
                id="outlined"
                label="Ticket Id"
                defaultValue={ticket.id}
                InputProps={{
                  readOnly: true,
                  disabled: true,
                }}
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                id="outlined"
                label="Ticket Name"
                defaultValue={ticket.name}
                onChange={(event) => {
                  const value = event.target.value;
                  onChangeValue("name", value);
                }}
                InputProps={{
                  onBlur: () => {
                    handleEdit(selectedTicket);
                  },
                }}
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                id="outlined"
                label="Content"
                multiline
                defaultValue={ticket.content}
                onChange={(event) => {
                  const value = event.target.value;
                  onChangeValue("content", value);
                }}
                InputProps={{
                  onBlur: () => {
                    handleEdit(selectedTicket);
                  },
                }}
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                id="outlined"
                label="Created At"
                defaultValue={moment(ticket.createdAt).format(
                  "DD-MM-YY, h:mm:ss a"
                )}
                InputProps={{
                  readOnly: true,
                  disabled: true,
                }}
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                id="outlined"
                label="Updated At"
                defaultValue={moment(ticket.updatedAt).format(
                  "DD-MM-YY, h:mm:ss a"
                )}
                InputProps={{
                  readOnly: true,
                  disabled: true,
                }}
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <Button
                variant="contained"
                onClick={() => handleDelete(selectedTicket)}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}
