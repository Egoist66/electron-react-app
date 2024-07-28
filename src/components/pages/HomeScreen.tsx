import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function HomeScreen() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
       
        
    }, [])
    return (
        <>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>

            <Button onClick={() => setCount(count => count + 1)} colorScheme='teal' size='md'>
              Button
            </Button>

            <div>
                {count}
            </div>
        </>
    );
}

export default HomeScreen