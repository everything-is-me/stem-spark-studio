import React, { createContext, useContext, useState, ReactNode } from "react";

type CompetitionTrack = "arise" | "ignite" | "general";

interface RegistrationContextType {
  isOpen: boolean;
  selectedTrack: CompetitionTrack;
  openModal: (track?: CompetitionTrack) => void;
  closeModal: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<CompetitionTrack>("general");

  const openModal = (track: CompetitionTrack = "general") => {
    setSelectedTrack(track);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <RegistrationContext.Provider value={{ isOpen, selectedTrack, openModal, closeModal }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return context;
};
