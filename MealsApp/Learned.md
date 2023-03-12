* Components created outside of function won't be recreated with every rendereing
* FlatList accepts a prop called numColumns={2} will render two item in a row
* We can set the default screen i.e. the screen which will appear first by setting prop of initialRouteName="ProductDetails" in Stack.Navigator or else by default first Stack.Screen is consider as default screen
* navigation.navigate("screenName", {params})  --> we can extract then in "ScreenName" screen using  useRoute().params hook or extracting {params} from "ScreenName" screen