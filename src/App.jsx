// Import React hooks for state management and side effects
import { useEffect, useState } from "react";

// Define the App component
function App() {
  // Initialize state with the current date and time
  const [time, setTime] = useState(new Date());

  // Use the useEffect hook to create a timer that updates the time every second
  useEffect(() => {
    // Create a timer that updates the time every 1000 milliseconds (1 second)
    const timer = setInterval(() => {
      // Update the time state with the current date and time
      setTime(new Date());
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means the effect runs only once

  // Return the JSX for the App component
  return (
    // Use Bootstrap classes for styling
    <div className="d-flex vh-100 justify-content-center align-items-center bg-dark text-white">
      <div className="text-center">
        <h1 className="display-3">Digital Clock</h1>
        
         <h2 className="mt-3">
          {time.toLocaleString('default', { weekday: 'long' })} {/* formatted day */}
        </h2>

          <h2 className="mt-3">
          {time.toLocaleTimeString()} {/* formatted system time */}
        </h2>
        
        <h2 className="mt-3">
          {time.toLocaleDateString()} {/* formatted date */}
        </h2>
       
      
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;