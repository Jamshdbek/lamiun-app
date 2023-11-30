import { Tabs } from "expo-router/tabs";
import { Entypo, AntDesign, Fontisto } from "@expo/vector-icons";
export default function TabsLayout() {
  return (
      <Tabs initialRouteName="index">
        <Tabs.Screen
         
          name="index"
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="lessons"
          options={{
            tabBarLabel:"lessons",
            tabBarIcon: () => (
              <Fontisto name="nav-icon-list-a" size={16} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: () => <AntDesign name="user" size={20} color="black" />,
          }}
        />
      </Tabs>
  );
};

