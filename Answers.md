1. What problem does the context API help solve?
-- Context API allows you to store data in a context object, not longer forcing you to pass down everything as props, otherwise referred to as "Prop-drilling". This can make passing data around much cleaner and easier.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-- actions are events that change the state of your application, they are then dispatched to the reducer which is a function that takes the previous state, the action...and returns the new state.

-- The store is known as a single source of truth because it contains all the state for your application, and all changes to state are sent to the store which then sends it to the UI.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-- Component state is state only accessible by that specific component, Application state is state that is accessible by the entire application. It might be a good time to use Application state when you have a large application with many nested component trees. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-- Redux thunk is a middleware that lets you call an action create that returns a function instead of an action object. It is useful in building asynchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

-- I'd say my favorite so far is Redux simply because of the amount of tools that you can utilize with it. It's fairly difficult to grasp, but it seems to have the most real world use cases of all the state management systems. 
