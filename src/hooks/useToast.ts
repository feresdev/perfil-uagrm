import { useState } from "react";

interface Type {
  visible: boolean;
  titleToast: string;
  statusToast: boolean | null;
  descriptionToast: string;
}

export const useToast = () => {
  const [isToast, setToast] = useState<Type>({
    visible: false,
    titleToast: "",
    statusToast: null,
    descriptionToast: "",
  });

  const showToast = (
    title: string,
    description: string,
    status: boolean | null
  ) => {
    setToast({
      visible: true,
      titleToast: title,
      statusToast: status,
      descriptionToast: description,
    });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        visible: false,
        statusToast: null,
      }));
    }, 4200);
  };

  return { isToast, showToast };
};
