import React, { useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, [token]);

  return {
    token,
  };
};
