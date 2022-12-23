import React, { useState } from "react";
import styles from "../styles/daftar.module.css";
import type { setStepType } from "./formTypes";
import CurrencyInput from "react-currency-input-field";

const StepThree = ({ step, setStep, values, handleChange }: setStepType) => {
  const [jangkaInput, setJangkaInput] = useState("");
  console.log(values.jangka_waktu);
  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_inner}>
          <div className={styles.form_parrent_el}>
            <div className={styles.input_half}>
              <label htmlFor="kantor_bank">Pilih Kantor Bank</label>
              <select
                name="kantor_bank"
                id="kantor_bank"
                autoComplete="kantor_bank"
              >
                <option value="Kantor Pusat Operasional">
                  Kantor Pusat Operasional
                </option>
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="jumlah_pinjaman">Jumlah Pinjaman</label>
              <CurrencyInput
                name="jumlah_pinjaman"
                intlConfig={{ locale: "id-ID", currency: "IDR" }}
                id="jumlah_pinjaman"
                autoComplete="jumlah_pinjaman"
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="jangka_waktu">Jangka Waktu Pinjaman</label>
              <CurrencyInput
                id="jangka_waktu"
                name="jangka_waktu"
                suffix=" Bulan"
                value={jangkaInput || ""}
                disableAbbreviations={true}
                onChange={handleChange}
                onValueChange={(value) => {
                  const vals: string = value || "";
                  setJangkaInput(vals);
                }}
                autoComplete="false"
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="tujuan_pinjaman">
                Tujuan Penggunaan Pinjaman
              </label>
              <input
                type="text"
                name="tujuan_pinjaman"
                id="tujuan_pinjaman"
                autoComplete="tujuan_pinjaman"
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="sumber_penghasilan">Sumber Penghasilan</label>
              <select
                name="sumber_penghasilan"
                id="sumber_penghasilan"
                autoComplete="sumber_penghasilan"
              >
                <option value="Dari Gaji">Dari Gaji</option>
                <option value="Dari Usaha">Dari Usaha</option>
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="penghasilan_perbulan">
                Penghasilan Rata-Rata Per Bulan
              </label>
              <input
                type="number"
                name="penghasilan_perbulan"
                id="penghasilan_perbulan"
                autoComplete="penghasilan_perbulan"
              />
            </div>
            <div className={`${styles.input_full} mt-8`}>
              <label htmlFor="nomor_rekening_bpr">
                Nomor Rekening Simpanan di Bank BPR
              </label>
              <input
                type="number"
                name="nomor_rekening_bpr"
                id="nomor_rekening_bpr"
                autoComplete="nomor_rekening_bpr"
              />
            </div>
            <div className={`${styles.input_half} `}>
              <label htmlFor="nama_bank">Nama Bank</label>
              <input
                type="number"
                name="nama_bank"
                id="nama_bank"
                autoComplete="nama_bank"
              />
            </div>
            <div className={`${styles.input_half} `}>
              <label htmlFor="nomor_rekening_bank_lain">
                Nomor Rekening Simpanan di Bank Lain
              </label>
              <input
                type="number"
                name="nomor_rekening_bank_lain"
                id="nomor_rekening_bank_lain"
                autoComplete="nomor_rekening_bank_lain"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setStep(step + 1)}
        type="button"
        className="float-right my-4 ml-4 rounded-md bg-blue-500 py-2 px-5 text-white hover:bg-blue-700 hover:opacity-60"
      >
        Selanjutnya
      </button>
      <button
        onClick={() => setStep(step - 1)}
        type="button"
        className="float-right my-4 rounded-md bg-gray-400 py-2 px-5 text-white hover:bg-gray-700 hover:text-opacity-80 hover:opacity-60"
      >
        Sebelumnya
      </button>
      <span className="float-right my-4 inline py-2 px-5 align-middle text-sm font-medium  text-gray-600">
        Step : {step}/<span className="font-semibold">5</span>
      </span>
    </>
  );
};

export default StepThree;
