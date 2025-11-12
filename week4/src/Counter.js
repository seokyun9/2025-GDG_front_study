import { useState } from 'react';
import CountNumber from './CountNumber';

function Counter() {
    const [count, setCount] = useState(0);
    
        function increment() {
        setCount(count + 1);
    }

        function reset() {
        setCount(0);
    }

        function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <CountNumber count={count} />
            
            <button onClick={decrement}>-1</button>
            
            <button onClick={reset}>reset</button>
            
            <button onClick={increment}>+1</button>
        </div>
)
}
export default Counter;