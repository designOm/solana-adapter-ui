import React, { useCallback } from "react";

export const NotificationContext = React.createContext({
  error: null,
  addError: () => { },
  removeError: () => { },
  success: null,
  addSuccess: () => { },
  removeSuccess: () => { },
  warning: null,
  addWarning: () => { },
  removeWarning: () => { },
});

export function APInotificationProvider({ children }) {
  const [error, setError] = React.useState(null);
  const [warning, setWarning] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const addError = (message, label, status) => setError({ message, label, status });
  const removeError = () => setError(null);

  const addWarning = (message, label, status) => setWarning({ message, label, status });
  const removeWarning = () => setWarning(null);

  const addSuccess = (message, label, status) => setSuccess({ message, label, status });
  const removeSuccess = () => setSuccess(null);

  const contextValue = {
    error,
    success,
    warning,
    addError: useCallback((message, label, status) => addError(message, label, status), []),
    removeError: useCallback(() => removeError(), []),
    addWarning: useCallback((message, label, status) => addWarning(message, label, status), []),
    removeWarning: useCallback(() => removeWarning(), []),
    addSuccess: useCallback((message, label, status) => addSuccess(message, label, status), []),
    removeSuccess: useCallback(() => removeSuccess(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}
