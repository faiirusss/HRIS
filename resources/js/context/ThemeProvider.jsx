import { createContext, useContext, useEffect, useState, useMemo } from "react";

const DEFAULT_THEME = "dark";

const initialState = {
    defaultTheme: DEFAULT_THEME,
    resolvedTheme: "light",
    theme: DEFAULT_THEME,
    setTheme: () => null,
    resetTheme: () => null,
};

const ThemeContext = createContext(initialState);

export function ThemeProvider({
    children,
    defaultTheme = DEFAULT_THEME,
    storageKey = "vite-ui-theme",
    ...props
}) {
    const [theme, _setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem(storageKey) || defaultTheme;
        }
        return defaultTheme;
    });

    // Optimized: Memoize the resolved theme calculation to prevent unnecessary re-computations
    const resolvedTheme = useMemo(() => {
        if (theme === "system") {
            if (typeof window !== "undefined") {
                return window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
            }
            return "light";
        }
        return theme;
    }, [theme]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const root = window.document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (currentResolvedTheme) => {
            root.classList.remove("light", "dark");
            root.classList.add(currentResolvedTheme);
        };

        const handleChange = () => {
            if (theme === "system") {
                const systemTheme = mediaQuery.matches ? "dark" : "light";
                applyTheme(systemTheme);
            }
        };

        applyTheme(resolvedTheme);

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme, resolvedTheme]);

    const setTheme = (newTheme) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(storageKey, newTheme);
        }
        _setTheme(newTheme);
    };

    const resetTheme = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem(storageKey);
        }
        _setTheme(DEFAULT_THEME);
    };

    const contextValue = {
        defaultTheme,
        resolvedTheme,
        resetTheme,
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue} {...props}>
            {children}
        </ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
