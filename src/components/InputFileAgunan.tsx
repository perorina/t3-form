import React, { useState } from "react";
import styles from "../styles/daftar.module.css";

export type file = {
  name: string;
  label: string;
  span: string;
  handleChange: (e: React.ChangeEvent) => void;
};

const InputFileAgunan = ({ name, label, span, handleChange }: file) => {
  const [file, setFile1] = useState<File | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    setFile1(event?.target?.files?.[0]);
  };
  return (
    <div className={`${styles.input_full} rounded-3xl!important`}>
      <label className="text-[8px] md:text-sm" htmlFor="alamat_agunan">
        {label}
        {span && <span>{span}</span>}
      </label>
      <input
        className="text-grey-500 text-xs file:mr-5 file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-6 file:text-xs file:font-medium file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 md:text-sm"
        type="file"
        name={name}
        id={name}
        accept="image/png, image/jpeg, .jpg, .jpeg, .png"
        onChange={handleInputChange}
      />
      {file && (
        <img
          className="mx-auto mt-2"
          src={URL.createObjectURL(file as Blob)}
          alt={file.name}
          width="300px"
        />
      )}
    </div>
  );
};

export default InputFileAgunan;
