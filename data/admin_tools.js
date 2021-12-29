import JoinTeam from '../screens/JoinTeamScreen';
import CreateTeam from '../screens/CreateTeamScreen';
import ViewData from '../screens/ViewDataScreen';
// import { AntDesign } from "@expo/vector-icons";

export const admin_tools = [
    {
      id: "1",
      name: "View Members",
      screen: JoinTeam,
      img: require("../images/data.png"),
      icon: 'eye'
    },
    {
      id: "2",
      name: "Create Data Forms",
      screen: CreateTeam,
      img: require("../images/data.png"),
      icon: 'form'
    },
    {
      id: "3",
      name: "View Survey Data",
      screen: ViewData,
      img: require("../images/database.jpg"),
      icon: 'calculator'
    },
    {
      id: "4",
      name: "Export Survey Data",
      screen: ViewData,
      img: require("../images/database.jpg"),
      icon: 'cloud'
    }
    
  ];
  
  // <AntDesign name="barchart" size={size} color={color} />
  // <AntDesign name="for" size={size} color={color} />