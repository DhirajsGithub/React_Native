# What is React Native
# React.js + React Native --> React Native Mobile Apps (IOS, Android)


## * React.js  --> A javascript library for building user interfaces typically used for web devlopment but it's actually <mark>react-dom</mark> that adds web support ! <i> React itself is platform-agnostic ! </i>


## * React Native --> A collection of "spcial" React ccomponents, Components are compiled to native UI elements, Native platform APIs exposed to javascript. React Native is like react-dom. It connects React to a special platform

<hr>

## A look under the hood
## Components are compiled but Login written by js remains same
### React Native maps (and compile) re-usable components to respective platform equivalents
like: 
in Web (div), in react-native(View), in Android(android.View), in ios(UIView)


in Web (input), in react-native(TextInput), in Android(EditText), in ios(UITextField)

<hr>

## Creating a New React Native App
### Development environment to chooose 
<a href="https://reactnative.dev/docs/environment-setup">React Native</a>
1. Expo CLI : Third Party servive, Managed app development, very convenient, less friction, can leave the expo system any time 
2. React Native CLI : By react native, bare bone development, less convenient features, easier integration with native source code 

## we will be using expo clie 
$ npx create-expo-app AwesomeProject


or you can go with expo cli as


$ sudo npm install -g expo-cli

$ expo init AwesomeProject

$ cd AwesomeProject

$ npm start

$ scan QR code usig "Expo Go" app


## Styling React Native App
1. Inline Styles
2. StyleSheet Objects provided by react native

Written in javascript, Based on CSS syntax, but only a subset of properties and features is supported

## Debugin React Native App
* take a hint through key names and searching them in your file
* Logging to console 
* Using React devtoops $ sudo npm install -g react-devtools, start the devtool as $ npx react-devtools

## Navigation
# Problem with Drawer Navigation 
after installing all the steps : 
https://reactnavigation.org/docs/drawer-navigator

from here : 
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/

add babel pulgin as : 

plugins: [
      'react-native-reanimated/plugin',
    ],

$ expo start -c

# State management with Redux and context API
1. using context API we use createContext and useContext from react
2. using redux : $ npm install @reduxjs/toolkit  $ npm install react-redux
3. https://redux-toolkit.js.org/introduction/getting-started


# Each folder will now contain Learned.md file where you can access what you will learned in that directory
