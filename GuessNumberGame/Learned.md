* for shadowing a view --> in android we have an elevation style property, shadowColor, shadowOffset belongs to ios
* TextInput has maxLength prop which accepts number, which limits the number of caracters
* TextInput has keyBoardType props, autoCapitalize, autoCorrect props
* ImageBackground has a prop called imageStyle which applies to the background image, we can set opacity to < 1 to have a background color and image combination 
* InputText will always give you a string evene it it's a number, use parseInt() 
* Alert.alert which confirms pressing of a button, Alert.prompt() will helpt to take the value 
* A text component can content another text component 

## Working the expo fonts 
https://docs.expo.dev/guides/icons/
e.g. : 
 <Ionicons name="md-checkmark-circle" size={32} color="green" />

## How to use the Custom fonts 
with expo $ expo install expo-font
<br>
in app component import {useFonts} from expo-font, useFonts returns an array first element will be a boolean saying fontsLoaded or not 

## splash screen showing 
$ expo install expo-app-loading  --> splash screen will be shown until some conditions are meant 
<br>
import AppLoading from "expo-app-loading", use it like : 
<br>
if(!fontsLoaded){
    return <AppLoading>
}


# Adaptive and responsive UI's
## builiding a cross-platform and device user interface
* executive platform specific
* adjust to differnt device sizes
* build adaptive components

<br>

* code outside of functional component won't rerender on changing the orientation, hence
* by default orientation is set to potrait change it to default in app.json file
* ## useWindowDimentions() hook will provide updated width and height on changing the orientation of device
* KeyboardAvoidingView must be wrapped by ScrollView container 
* with Platform.select({}) method we can get rid of conditional statement and can write code for ios and android sepecific

## Naming component according to platoform specific, e.g. Title.andoroid.js or Title.ios.js will import the file as Title and react under the hood will pick the specific file for specific platform