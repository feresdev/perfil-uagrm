export const logout = async () => {
  try {
    const response = await fetch("/api/v1/auth/logout", {
      method: "POST",
      body: null,
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (!response.ok) {
      const error = await response.json();
      console.error("Error al cerrar sesión", error);
      return false;
    }
    return true;
  } catch (error: any) {
    console.error("Error en el servidor:", error.message);
    return false;
  }
};
