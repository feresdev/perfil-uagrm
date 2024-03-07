// Funcion para validar si el input cumple el formato de un correo
export const validarVacio = (
  value: string | null,
  setState: Function,
  id: string,
  message: string
) => {
  const isValid = value?.length != 0;

  if (!isValid) {
    setState((prev: any) => ({
      ...prev,
      [id]: message,
    }));
  } else {
    setState((prev: any) => ({
      ...prev,
      [id]: "",
    }));
  }
  return isValid;
};
