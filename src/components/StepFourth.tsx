import React, { useState } from "react";
import styles from "../styles/daftar.module.css";

import DialogBPKB from "./DialogBPKB";
import DialogSertifikat from "./DialogSertifikat";
const StepFourth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sertifikatOpen, setSertifikatOpen] = useState(true);
  const handleChangeJaminan = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setIsOpen(true);
  };
  const handleChangeSetifikat = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSertifikatOpen(true);
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {isOpen && <DialogBPKB isOpen={isOpen} setIsOpen={setIsOpen} />}
      {sertifikatOpen && (
        <DialogSertifikat
          sertifikatOpen={sertifikatOpen}
          setSertifikatOpen={setSertifikatOpen}
        />
      )}
      <h1 className="py-2 text-lg font-medium md:text-2xl">
        Pilih Jenis Angunan
      </h1>
      <div className={`${styles.form_wrapper} w-3/4`}>
        <div className={styles.form_inner}>
          <div className={`${styles.form_parrent_el}`}>
            <div className={`${styles.input_half} flex flex-col`}>
              <h2 className="mb-2 text-center text-sm font-semibold md:text-base">
                Agunan Sertifikat Tanah
              </h2>
              <input
                type="button"
                style={{ fontSize: 18 }}
                name="sertifikat"
                className="cursor-pointer  rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:outline-none"
                value="Pilih"
                onClick={handleChangeSetifikat as VoidFunction}
              />
            </div>
            <div className={`${styles.input_half} flex flex-col`}>
              <h2 className="mb-2 text-center text-sm font-semibold md:text-base">
                Agunan BBKB
              </h2>
              <input
                type="button"
                name="bbkb"
                style={{ fontSize: 18 }}
                className="cursor-pointer rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:outline-none"
                value="Pilih"
                onClick={handleChangeJaminan as VoidFunction}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFourth;
