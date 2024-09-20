
import { Box, useTheme } from "@mui/material";
import { listWithSwitch } from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";
import WifiIcon from '@mui/icons-material/Wifi'; // Default import
import BluetoothIcon from '@mui/icons-material/Bluetooth'; // Default import
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';


const ListWithSwitch = memo(({ isOpen }) => {
  const theme = useTheme();

  const items = [
    { id: "wifi", label: "Wi-Fi", icon: <WifiIcon /> },
    { id: "bluetooth", label: "Bluetooth", icon: <BluetoothIcon /> },
    { id: "location", label: "Location", icon: <LocationOnIcon /> },
    { id: "airplane", label: "Airplane Mode", icon: <AirplanemodeActiveIcon /> },
    { id: "hotspot", label: "Hotspot", icon: <WifiTetheringIcon /> },
    { id: "Do not disturb", label: "disturb", icon: <DoNotDisturbOnIcon /> },
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass items and other props to make Lists reusable */}
        <Lists 
        listWithSwitch={true}
        items={items}
        bgColor="#1F2336"
      
        />
      </Box>
      {isOpen && <CodeBlock code={listWithSwitch} />}
    </Box>
  );
});

export default ListWithSwitch;
