# Grailsoft Guide to React Native

Congratulations Grailsoft Intern, you are about to learn React Native!

Chances are you are somewhat (or completely) unfamiliar with what React and
React Native are all about. Good news! There are tons of resources online,
most of which are pretty well written. This guide will not go into detail about
any of the topics covered; if anything this a more of a guide to resources for
all the things you'll be learning during your internship.

The idea behind this guide is to get you as comfortable with writing apps in
React Native as possible while doing it as quickly as possible. Given your short
timeframe, the sooner you can start coding, the better! Hopefully this guide,
along with Grailsoft's react-native template, will help you get started quickly. If
you happen to come across any resources you find helpful that aren't listed
here, feel free to add them!

## JS

Before you start diving into React, make sure you are up to date on your
JavaScript, particularly the features listed below.

#### ES6
* Usage of let and const
* Usage of (fat) arrow functions
* Usage of default parameters
* Usage of the conditional operator ( (true) ? value=true : value=false instead
  of if(true){value=true}else{value=false})
* Usage of template literals ( `Hello ${name}!` instead of 'Hello' + name + '!')
* Usage of the spread operator (...)

#### ES7
* Usage of async/await instead of promises
* Usage of fetch/request/response instead of XMLHTTPRequest


## React/React Native

Once you're feeling comfortable with all of these concepts, its time to start
getting into React! Keep in mind that React and React Native are not the same
thing; React is a JavaScript library that makes use of a virtual DOM, whereas
React Native is a framework used to easily create mobile apps for both iOS and
Android. You'll be working in React Native, which uses React, so be sure to
focus on getting comfortable with React Native. This will require you to spend
sometime learning about React, but don't spend too much time focusing solely on
React.

There are lots of great resources online for both React and React Native. If you
can, try to stick to the more recent ones! If you are a resident of Multnomah
County, get a library card and start using your free Lynda account! They've got
great, comprehensive videos that include example code for you to follow along
with. As of 12/21/17 there is a new React Native Learning track!

#### React
* https://reactjs.org/

#### React Native
* https://facebook.github.io/react-native/

## Redux / Immutable

Now that you've gone through some React and React Native material, it's time to
get into Redux. You may have seen it in some of the examples online. If not,
it's probably best to read up on some of the documentation. The basic idea is to
store the entire state of the app in a single object (the store). Components may
change the state by dispatching actions. These actions will change the state
through reducers. The way the react-native-template uses reducers is a bit
different from typical Redux reducers for two reasons; 1. It uses a helper
function (defined in the src/lib/helpers folder), and 2. It sets state through
immutable. Immutable is a state management tool that helps you avoid the
pitfalls of mutating data with JavaScript. After changing the state with the
reducers, components can subscribe to parts of the state (or the entire store),
so that if the state changes, the component will know it needs to update and
re-render.

#### Redux
* https://redux.js.org/

#### Immutable
* https://facebook.github.io/immutable-js/

## Sagas

You probably came across some sort of asynchronous request mechanisms in the
examples online (Thunk appears in the Lynda examples). Sagas are another way
of dealing with async requests, and they work with Redux quite nicely. Each saga
has watcher that watches for specific actions to be dispatched through Redux.
When the watcher 'sees' the action, it will execute the saga action. Better yet,
sagas are able to dispatch actions from within themselves, making chaining
simple and straight-forward.

#### Sagas
* https://github.com/redux-saga/redux-saga

## The Template

You should now be ready to get into the template! Each file in the template has
comments to help explain what is going on in (and sometimes outside of) the
file. You should be able to start from the App.js file and navigate your way
through the rest of the files. One thing to keep in mind while you're going
through the template: our containers are react components, and our components
(in src/components) are actually stateless functions. Another thing to keep in
mind is that the code you went through online may look different than the code
in the template. This could be due to 1. Flexibility in the way JS is written
and code is formatted 2. The code in one example is more complex, but they still
have the same 'shape' (routes for navigation is a good example of this) 3. The
code is actually different, and you might want to investigate why. You may have
noticed that the import paths look a little different... As you become more
familiar with React Native and the template, variations in code will appear to
be less intimidating. Don't be afraid to mess around with things in order to
figure them out!

#### ATTENTION
Before you 'react-native run-ios' in the react-native-template folder, you may
need to 'npm start -- --reset-cache'. This is due to a babel module resolver
plugin that makes importing files a bit easier. Close the terminal window that
was running with the simulator, run the npm command in the window that is still
open, then refresh your simulator.

## React Native Maps

You might find that it will be useful to include a map in you app. You might
decide that using GoogleMaps through the react-native-maps library is the way
to go. So you follow the instructions... and it doesn't work. Here's a step by
step guide to get things set up in your app. Make sure you've got everything
saved before you start messing around! Pull up the installation guide, you'll
be copying some code from there

1. Run 'npm install react-native-maps --save'. You'll feel silly if you don't
  do this first. While your at it, did you do your regular npm install?

2. Navigate to your app's folder and go to the ios folder. Create a new file in
  it called Podfile (no file extension included)

3. The Podfile they include has some issues. The line that says "pod 'yoga' ..."
  should have a capital Y. BatchedBridge can be removed a few lines below. See
  the Podfile for the template to see code that works. Don't forget to replace
  the project name with yours!

4. Navigate to yourproject/ios/yourprojectname/AppDelegate.m, and add the two
  lines mentioned in the instructions. See the little + signs next to those
  lines? GET RID OF THEM. See that - sign on that line in between those two
  lines? NO TOUCH, LEAVE THAT THERE.

5. You should now be able to import MapView from react-native-maps and use it
  in one of your containers. Two things to bear in mind: 1. Without styling,
  your map will load but not show. Be sure to set flex, width, and height for
  the style. 2. You'll also want to import { PROVIDER_GOOGLE } from
  react-native-maps, and include provider={PROVIDER_GOOGLE} as a prop for the
  MapView.

And now everything should work!
