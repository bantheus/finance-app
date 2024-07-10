"use client";

import { useUser } from "@clerk/nextjs";

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="mb-4 space-y-2">
      <h2 className="text-balance text-2xl font-medium text-white lg:text-4xl">
        Bem vindo de volta{isLoaded ? ", " : " "}
        {user?.firstName} 🤘
      </h2>
      <p className="text-sm text-teal-500/80 lg:text-base">
        Aqui está o resumo das suas finanças
      </p>
    </div>
  );
};

export default WelcomeMsg;
