import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleSwitch}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      <p>The switch is currently: {isOn ? 'On' : 'Off'}</p>
    </div>
  );
};

export default Toggle;
