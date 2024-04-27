"use client";

import { useRouter } from "next/navigation";

const Backdrop = () => {
  const router = useRouter();
  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default Backdrop;
