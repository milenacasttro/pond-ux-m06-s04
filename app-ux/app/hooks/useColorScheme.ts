import { createContext } from 'react';
import defaultColorScheme from './useThemeColor';


const useColorScheme = () => {
  return 'light'; 
};

const ColorSchemeContext = createContext(defaultColorScheme);

export { ColorSchemeContext };
export default useColorScheme;