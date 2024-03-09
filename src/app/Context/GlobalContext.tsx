"use client";
import { AcademicoMain } from "@/types/academico";
import { BoletaMain } from "@/types/boleta";
import { ErrorResponse } from "@/types/errorResponse";
import { EstudianteMain } from "@/types/estudiantes";
import { HistoricoMain } from "@/types/historico";
import { NotasMain } from "@/types/notas";
import React, { createContext, useContext, useState } from "react";

interface ContextTypeContext {

  // Datos Personales
  dataPersonales: EstudianteMain | null;
  setDataPersonales: (data: EstudianteMain | null) => void;
  errorPersonales: ErrorResponse | null;
  setErrorPersonales: (error: ErrorResponse | null) => void;
  loadingPersonales: boolean;
  setLoadingPersonales: (loading: boolean) => void;

  // Historico
  dataHistorico: HistoricoMain | null;
  setDataHistorico: (data: HistoricoMain | null) => void;
  errorHistorico: ErrorResponse | null;
  setErrorHistorico: (error: ErrorResponse | null) => void;
  loadingHistorico: boolean;
  setLoadingHistorico: (loading: boolean) => void;

  // Avance academico
  dataAvance: AcademicoMain | null;
  setDataAvance: (data: AcademicoMain | null) => void;
  errorAvance: ErrorResponse | null;
  setErrorAvance: (error: ErrorResponse | null) => void;
  loadingAvance: boolean;
  setLoadingAvance: (loading: boolean) => void;

  // Boleta de inscripcion
  dataBoleta: BoletaMain | null;
  setDataBoleta: (data: BoletaMain | null) => void;
  errorBoleta: ErrorResponse | null;
  setErrorBoleta: (error: ErrorResponse | null) => void;
  loadingBoleta: boolean;
  setLoadingBoleta: (loading: boolean) => void;

  // Consulta de notas
  dataNotas: NotasMain | null;
  setDataNotas: (data: NotasMain | null) => void;
  errorNotas: ErrorResponse | null;
  setErrorNotas: (error: ErrorResponse | null) => void;
  loadingNotas: boolean;
  setLoadingNotas: (loading: boolean) => void;

}

// Crear el contexto
const GlobalContext = createContext<ContextTypeContext | undefined>(undefined);

// Proveedor del contexto
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {

  // Estados: Datos personales
  const [dataPersonales, setDataPersonales] = useState<EstudianteMain | null>(null);
  const [errorPersonales, setErrorPersonales] = useState<ErrorResponse | null>(null);
  const [loadingPersonales, setLoadingPersonales] = useState<boolean>(false);

  // Estados: Historico
  const [dataHistorico, setDataHistorico] = useState<HistoricoMain | null>(null);
  const [errorHistorico, setErrorHistorico] = useState<ErrorResponse | null>(null);
  const [loadingHistorico, setLoadingHistorico] = useState<boolean>(false);

  // Estados: Historico
  const [dataAvance, setDataAvance] = useState<AcademicoMain | null>(null);
  const [errorAvance, setErrorAvance] = useState<ErrorResponse | null>(null);
  const [loadingAvance, setLoadingAvance] = useState<boolean>(false);

  // Estados: Boleta de inscripcion
  const [dataBoleta, setDataBoleta] = useState<BoletaMain | null>(null);
  const [errorBoleta, setErrorBoleta] = useState<ErrorResponse | null>(null);
  const [loadingBoleta, setLoadingBoleta] = useState<boolean>(false);

  // Estados: Consulta de notas
  const [dataNotas, setDataNotas] = useState<NotasMain | null>(null);
  const [errorNotas, setErrorNotas] = useState<ErrorResponse | null>(null);
  const [loadingNotas, setLoadingNotas] = useState<boolean>(false);


  const values: ContextTypeContext = {

    // Datos personales
    dataPersonales,
    errorPersonales,
    loadingPersonales,
    setDataPersonales,
    setErrorPersonales,
    setLoadingPersonales,

    // Historico
    dataHistorico,
    errorHistorico,
    loadingHistorico,
    setDataHistorico,
    setErrorHistorico,
    setLoadingHistorico,

    // Avance Academico
    dataAvance,
    errorAvance,
    loadingAvance,
    setDataAvance,
    setErrorAvance,
    setLoadingAvance,

    // Boleta de inscripcion
    dataBoleta,
    errorBoleta,
    loadingBoleta,
    setDataBoleta,
    setErrorBoleta,
    setLoadingBoleta,

    // Consulta de notas
    dataNotas,
    errorNotas,
    loadingNotas,
    setDataNotas,
    setErrorNotas,
    setLoadingNotas

  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );

};

// Hook para acceder al contexto
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext debe usarse dentro del Provider");
  }
  return context;
};
