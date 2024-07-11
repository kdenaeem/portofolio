"use client";
import React, { useContext, useState } from 'react'
import { links } from '../lib/data';
import { createContext } from 'react';

// A normal component which allows you to keep track of the page
// creating a very specific types of things the section name could be
// links -> number -> 'name' property
// we are saying it can be any of the names
type SectionName = typeof links[number]['name']
// This is the type for 
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}

type ActiveSectionContextType = {
  activeSection : SectionName;
  setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)


export default function ActiveSectionContextProvider({children} : 
  ActiveSectionContextProviderProps ) {

   const [activeSection, setActiveSection] = useState<SectionName>('Home');
  
   return( // we need to wrap it in this for the children to see it 
     <ActiveSectionContext.Provider value={{
      activeSection,  
      setActiveSection
     }}>
      {children}
     </ActiveSectionContext.Provider>);
  
}

// we can consume this in the header
export function useActiveSectionContext() {
  //  useContext is a context hook to consume context
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an activesectionprovider component"
    );

  }
  return context;

}