import { create } from 'zustand';

/**
 * Creates a Zustand store for managing the chat application's theme.
 * Zustand is a small, fast, and scalable bearbones state-management solution.
 */
export const useThemeStore = create((set) => ({
  /**
   * Initializes the theme state.
   * It tries to load the theme from localStorage with the key 'chat-theme'.
   * If no theme is found in localStorage, it defaults to 'coffee'.
   */
  theme: localStorage.getItem('chat-theme') || 'coffee',

  /**
   * Sets the new theme for the application.
   * @param {string} theme - The new theme to be set.
   * This function also stores the selected theme in localStorage for persistence
   * and updates the state using Zustand's `set` function.
   */
  setTheme: (theme) => {
    localStorage.setItem('chat-theme', theme);
    set({ theme });
  },
}));
