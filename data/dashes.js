import JoinTeam from '../screens/JoinTeamScreen';
import CreateTeam from '../screens/CreateTeamScreen';
import ViewData from '../screens/ViewDataScreen';
import { AntDesign } from "@expo/vector-icons";

export const dashes = [
    {
      id: "1",
      name: "Join a Team",
      screen: JoinTeam,
      img: require("../images/data.png"),
      icon: 'adduser'
    },
    {
      id: "2",
      name: "Create a Team",
      screen: CreateTeam,
      img: require("../images/data.png"),
      icon: 'addusergroup'
    },
    {
      id: "3",
      name: "View Previous Statistics",
      screen: ViewData,
      img: require("../images/database.jpg"),
      icon: 'barchart'
    }
    
  ];
  
  // <AntDesign name="barchart" size={size} color={color} />
  // <AntDesign name="calculator" size={size} color={color} />