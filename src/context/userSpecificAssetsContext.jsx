import React, { createContext, useContext, useReducer } from 'react'

// Initial State
const initialState = {
  userBills: [],
  userDocuments: [],
  userCredits: [],
  userPreviousTransactions: []
}

// Reducer Function
const userAssetsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_BILLS':
          return { ...state, userBills: action.payload }
    case "SET_ALL_BILLS":
          return { ...state, userBills: action.payload };
      
      case "SET_ALL_DOCUMENTS":
      return { ...state, userDocuments: action.payload };
    
    case 'SET_USER_DOCUMENTS':
      return { ...state, userDocuments: action.payload }
    case 'SET_USER_CREDITS':
      return { ...state, userCredits: action.payload }
    case 'SET_USER_PREVIOUS_TRANSACTIONS':
      return { ...state, userPreviousTransactions: action.payload }
    case 'RESET_USER_ASSETS':
      return initialState
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// Create Context
const UserAssetsContext = createContext()
const UserAssetsDispatchContext = createContext()

// Provider Component
export const UserAssetsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userAssetsReducer, initialState)

  return (
    <UserAssetsContext.Provider value={state}>
      <UserAssetsDispatchContext.Provider value={dispatch}>
        {children}
      </UserAssetsDispatchContext.Provider>
    </UserAssetsContext.Provider>
  )
}

// Custom Hooks for Accessing Context
export const useUserAssets = () => {
  const context = useContext(UserAssetsContext)
  if (!context) {
    throw new Error('useUserAssets must be used within a UserAssetsProvider')
  }
  return context
}

export const useUserAssetsDispatch = () => {
  const context = useContext(UserAssetsDispatchContext)
  if (!context) {
    throw new Error(
      'useUserAssetsDispatch must be used within a UserAssetsProvider'
    )
  }
  return context
}
