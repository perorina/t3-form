import type { NextPage } from "next";
import React, { useState } from "react";

import styles from "../styles/daftar.module.css";

import { StepOne } from "../components/StepOne";
import { useFormik } from "formik";
import type { RegisterType } from "./Lists";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

const Daftar: NextPage = () => {
  const [step, setStep] = useState(1);

  const initalRegister: RegisterType = {
    nama_petugas: "",
    nik: "",
    nama_lengkap: "",
    nama_alias: "",
    gender: "",
    tempat_lahir: "",
    tanggal_lahir: new Date(),
    pendidikan: "",
    pernikahan: "",
    nik_pasangan: "",
    nama_pasangan: "",
    pekerjaan: "",
    tempat_kerja: "",
    alamat_kerja: "",
    tel_tempat_kerja: "",
    email: "",
    nomor: "",
    kode_pos: 0,
    desa: "",
    kecamatan: "",
    kota: "",
    provinsi: "",
    dom_kode_pos: 0,
    dom_desa: "",
    dom_kecamatan: "",
    dom_kota: "",
    dom_provinsi: "",
    dom_alamat: "",
    jangka_waktu: "",
    alamat_sesuai: false as boolean,
  };

  const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
    initialValues: initalRegister,

    onSubmit(values) {
      console.log(values);
    },
  });

  console.log(values);
  return (
    <main className={styles.form_main}>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <StepOne
            setStep={setStep}
            step={step}
            values={values}
            handleChange={handleChange}
          />
        )}

        {step === 2 && (
          <StepTwo
            setStep={setStep}
            step={step}
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
        )}
        {step === 3 && (
          <StepThree
            setStep={setStep}
            step={step}
            values={values}
            handleChange={handleChange}
          />
        )}
      </form>
    </main>
  );
};

export default Daftar;
