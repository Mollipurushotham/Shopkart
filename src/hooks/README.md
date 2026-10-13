# React Hooks
- React provides certains hooks to help maintain state and lifecycle methods of functio nal components
---
1. ** useStats() ** -Manages component state 
-syntax
```jsx 
const[state,setState]=useState(initialvalue);
```
    |Term|Relavance|
    | `state` |reference to current value of state |
    | `setState` |function to set value ofnstate|
    | `initialValue` |initialization value of state ;this decides the data type as well|
    |`useState `|return asn array of variableassigned with the state value given as parameter and a functiom which updates the state value. |


** examples**
```js
import {useState }from "react";
function Counter(){
    const [count ,setCount]=useState(0),
    //0 will be set as the initial value of 'count'

    function increment(){
        setCount(count+1);
    }
    return(
        <div>
            <h2>Count:{count}</h2>
            <button onclick={increment()}>
            Increment
            </button>
            </div>
        );
}

export default Counter;
```

Applications:
-form inputs
-Shopping cart quentities of individual iteams
-Authenicaaation  UI state udations
-Filtering and sortingg in search results
-Modal visibilty
-Theme changes
-Pagination
-TAbe
-Selection of cards, gallary images for forwarding, etc

---

2. **useEffect()** handles functions with side effects preventing them from being called unintentionally.
This allows us to synchronise a component with external systems with controlled side effects.
syntax :

useEffect(<function_with_side_effect>, [dependency_array]);
useEffect(
    () => {
        // Effect logic

        return () => {
            // returning the cleanup logic using arrow method
        };
    },

    [dependencies]
);
Effect is the logic which has side effects.

Cleanup will be executed when the effect is required to be cleaned up.

Dependency Array - Determines when the effect should run again.

Dependency Array can have different configurations

Dependency Array	Result
No dependency array	Effect runs after every committed render
Empty dependency array	Runs after initial mount only (one-time)
With dependencies	Runs effect after initial mount and whenever the depencencies changes.
Examples :

Fetching response from API
Setting up event listeners
Starting timers
Subscribing to WebSockets
Updating BOM/DOM
Connecting to external libraries












