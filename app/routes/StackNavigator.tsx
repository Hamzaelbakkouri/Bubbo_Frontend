import { NavigationContainer } from "@react-navigation/native";
import { RootScreenRoutesT } from "../types/RootScreenRoutes";
import Home from "../screens/Home";
import BookDetails from "../screens/BookDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';


const Stack = createStackNavigator<RootScreenRoutesT>();

export const StackNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                
                    name="BookDetails"
                    component={BookDetails}
                    options={({ route }: { route: RouteProp<RootScreenRoutesT, 'BookDetails'> }) => ({
                        title: route.params.book.title,
                        headerShown: false,
                      })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
