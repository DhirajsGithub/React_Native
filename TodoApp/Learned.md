# How to access the app
$ git clone https://github.com/DhirajsGithub/React_Native.git
$ cd React_Native/TodoApp
$ npm install
$ npm start
$ scan the QR code with the "expo" app available at playstore and app store

# Diving into the core concepts
* Using react native components and building UIs
* Styling React native App
* Adding interactivity and managing state


<hr/>

## basics
* default the container is not scrollable, we need to use inbuilt ScrollableView component 
* Optimizing List with FlastList : ScrollView will render all the item, including which are not visibible to the screen, leading to performance issue. a.k.a. scroll view renders all it's child items
* ## <mark> FlatList </mark> : FlastList component is basically built for scroll list and it will only render the items which are visible to the screen, all the other item's in the screen will be loaded lazyily as user scrolls 
* FlatList is similar to ScrollView, but having more performance than ScrollView, and no need to map data manually 
* FlatList will solve the unique key property of each child as, it will see if each child contains a "key" property, what if we don't have a key property for our item but have any property let say id which is unique to each child then FlatList has KeyExtractor prop which want's a function with parameters item and index
* <Button /> doesn't support a sytle prop
* can change app.json file which will apply style to each screen if screen is not specify with that style
* StatusBar from expo-status-bar will solve the problem of status bar color style as light or dark or auto

## <mark>Pressable</mark> : Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

## bind() function : a javascript function which basically allows you to preconfigure a function for future execution. bind() function will be helpful to add parameter to a callback function which we are supposed to do by make a function then calling a function inside it

## Android Ripple Effect : as android_ripple={{}} The component Pressable has one Android-specific attribute android_ripple, which allows to customize the UX of the ripple effect.

## Modal ->  to present content above an enclosing view.

<hr/> 

## Styling creteria
* styles dont' cascade
* ios & android styling difference, borderRadius to Text field will work for androind and not for ios
* but View border radius will work for both platforms