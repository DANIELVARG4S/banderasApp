import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { AppState, useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { darkColors, lightColors, ThemeColors } from "../config/theme/theme";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors:ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor)  => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {

    const  colorScheme = useColorScheme();

    const [currentThem, setCurrentTheme] = useState<ThemeColor>('light'); 

    const isDark = currentThem === 'dark';
    const colors = isDark ? darkColors : lightColors;

    // useEffect(() => {
    //     if (colorScheme === 'dark') {
    //         setCurrentTheme('dark');
    //     }else {
    //         setCurrentTheme('light');
    //     }

    //     //   return () => {
    //     //     setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    //     //   };
    // }, [colorScheme]);
    
    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
        //    console.log('AppState changed to', nextAppState);
            if (nextAppState === 'active') {
                const colorScheme = useColorScheme();
                setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
            }
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    }

    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme} >
                  
            <ThemeContext.Provider
                value={{
                    currentTheme: currentThem,
                    isDark: isDark,
                    colors: colors,
                    setTheme: setTheme,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    )
}