import type { RegisterType } from "../pages/Lists";
import type { Dispatch, SetStateAction, ChangeEventHandler } from "react";

export interface setStepType {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  values: RegisterType;
  handleChange: ChangeEventHandler;
  setFieldValue: (
    field: string,
    value: number | string | null,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<RegisterType>>;
}

export type desaType = {
  code?: number;
  village?: string | null;
};

export type getProvResponseType = {
  postal: number;
  city: string;
  district: string;
  province: string;
  villages: desaType[];
};

export type UploadFieldBpkb = {
  name: string;
  label: string;
  span: string;
};
