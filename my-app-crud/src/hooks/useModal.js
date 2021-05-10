import { useState} from 'react';

export const  useModal= (initialValue=false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal=()=>setIsOpen(true);
  const closeModal=()=>setIsOpen(false);

  // retornmaos los valores del UseModal en un arreglo
  return [isOpen,openModal,closeModal];
}
 
