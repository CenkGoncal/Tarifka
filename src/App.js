import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryList from './pages/CategoryList/CategoryList';
import MealList from './pages/MealList/MealList';
import MealDetail from './pages/MealDetail/MealDetail';


const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryPage" component={CategoryList}
          options={{
            title: 'Categories',
            headerTintColor: '#F44336',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="MealPage" component={MealList}
          options={{
            title: 'Meals',
            headerBackTitle: "Categories",
            headerBackTitleVisible: true,
            headerTintColor: '#F44336',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="MealDetail" component={MealDetail}
          options={{
            title: 'Detail',
            headerTintColor: '#F44336',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;