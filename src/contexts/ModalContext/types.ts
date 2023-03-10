interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalType {
  modalType: string | null;
}

interface iModalContext {
  setShowModal: React.Dispatch<React.SetStateAction<null | string>>;
  showModal: string | null;
  handleShowModal: (type: string | null) => void;
  handleCloseModal: () => void;
}

interface IInput {
  type: string;
  placeholder: string;
  id: string;
}

export type { iModalContextProps, iModalType, iModalContext, IInput };

