import JoinTeam from '../screens/JoinTeamScreen';
import CreateTeam from '../screens/CreateTeamScreen';
import ViewData from '../screens/ViewDataScreen';

export const dashes = [
    {
      id: "1",
      name: "Join a Team",
      screen: JoinTeam,
      img: require("../images/data.png"),
    },
    {
      id: "2",
      name: "Create a Team",
      screen: CreateTeam,
      img: require("../images/data.png"),
    },
    {
      id: "3",
      name: "View Previous Statistics",
      screen: ViewData,
      img: require("../images/database.jpg"),
    }
    
  ];
  