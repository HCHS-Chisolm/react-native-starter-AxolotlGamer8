# CHEATCODES FOR AWESOMENESS

## Using Arrow Functions

const MyComponent = () => (
  <Text>Hello, world!</Text>
);

If your component only contains a single, simple expression, you can use an arrow function with an implicit return. This means that you don't need to use the return keyword, and the value of the expression will be automatically returned by the function.


## All React Hooks
useState: create a value that is preserved across renders and triggeres a re-render when it changes.
useRef: create a value that is preserved across renders, but won't trigger a re-render when it changes.
useEffect: synchronize a component with some external system and run after render.
useContext: get access to what was passed to a Context's Provider.
useReducer: create a value that is preserved across renders and triggers a re-render when it changes, using the reducer pattern. (useState in reducer pattern).
useMemo: cache the result of a calculation between renders.
useCallback: cache a function between renders.
useLayoutEffect: synchronize a component with some external system before the browser paints the screen.
useSyncExternalStore: subscribe to an external store.
useEffectEvent: encapsulate a side effect that synchronizes your component with some outside system.


##  How to start a component

import { View } from "react-native";

function App() {
  return (
    <View>
      <ArticleTitle />
    </View>
  )
};

export default App;

To call the component on your React Native application, use the following code (Note that we need to wrap our component in a View):


## rnfs

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

const styles = StyleSheet.create({})


## rnfe

import React from 'react'
import { View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1


## sntest

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import $1 from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}

  const wrapper = renderer.create(<$1 {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})


## v⇥ var statement
var ${0}

## v=⇥ var assignment
var ${1:name} = ${2:value}

## l⇥ let statement
let ${0}

## l=⇥ let assignment
let ${1:name} = ${2:value}