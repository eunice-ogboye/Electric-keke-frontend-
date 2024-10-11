import { LockScroll, UnlockScroll } from "@/utils/ScrollLock";
import { useEffect, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    if (isModalOpen) {
      LockScroll();
      // console.log("locked");
    } else {
      UnlockScroll();
      // console.log("unlocked");
    }
  }, [isModalOpen]);

  return {
    isModalOpen,
    setIsModalOpen,
    closeModal,
    openModal,
  };
};
