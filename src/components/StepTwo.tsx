// FORM TAHAP 2

import styles from "../styles/daftar.module.css";
import React, { useState } from "react";
import type { desaType, getProvResponseType, setStepType } from "./formTypes";
import axios from "axios";

const StepTwo = ({
  step,
  setStep,
  values,
  handleChange,
  setFieldValue,
}: setStepType) => {
  const [desaList, setDesaList] = useState<Array<object>>([]);
  const [domDesaList, setDomDesaList] = useState<Array<object>>([]);
  const [domisili, setDomisili] = useState<getProvResponseType>({
    postal: 0,
    city: "",
    district: "",
    province: "",
    villages: [],
  });
  const MIN_QUERY_LENGTH = 4; //

  // fungsi eventChange kode_pos atau dom_kode_pos
  const handleChangePostal = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // pass Formik eventChange
    handleChange(e);

    const inputLength = e.target.value.toString().length;
    const inputValue = e.currentTarget.value;

    // Jika Input kodepos lebih dari 4 angka maka trigger request api
    if (inputLength > MIN_QUERY_LENGTH) {
      // jika target input "kode_pos"
      if (e.target.name === "kode_pos") {
        await axios.get(`/api/getProv?code=${inputValue}`).then(({ data }) => {
          setFieldValue("kecamatan", data.district);
          setFieldValue("kota", data.city);
          setFieldValue("provinsi", data.province);
          setDomisili(data);
          setDesaList(data.villages);
        });
      } else {
        // target input "dom_kode_pos"
        await axios.get(`/api/getProv?code=${inputValue}`).then(({ data }) => {
          setFieldValue("dom_kecamatan", data.district);
          setFieldValue("dom_kota", data.city);
          setFieldValue("dom_provinsi", data.province);
          setDomDesaList(data.villages);
        });
      }
    } else {
      // jika input kurang dari 5 angka kosongkan field

      if (e.target.name === "kode_pos") {
        setFieldValue("kecamatan", "");
        setFieldValue("kota", "");
        setFieldValue("provinsi", "");
        setDesaList([]);
      } else {
        setFieldValue("dom_kecamatan", "");
        setFieldValue("dom_kota", "");
        setFieldValue("dom_provinsi", "");
        setDomDesaList([]);
      }
    }
  };

  const handleCheckDomisili = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      handleChange(e);
      setFieldValue("dom_kode_pos", domisili.postal);
      setFieldValue("dom_kecamatan", domisili.district);
      setFieldValue("dom_kota", domisili.city);
      setFieldValue("dom_provinsi", domisili.province);
      setDomDesaList(domisili.villages);
      setFieldValue("dom_desa", values.desa);
    } else {
      setFieldValue("dom_kode_pos", "");
      setFieldValue("dom_kecamatan", "");
      setFieldValue("dom_kota", "");
      setFieldValue("dom_provinsi", "");
      setDomDesaList([]);
    }
  };

  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_inner}>
          <div className={styles.form_parrent_el}>
            <div className={styles.input_half}>
              <label htmlFor="kode_pos">Kode Pos</label>
              <input
                type="number"
                name="kode_pos"
                id="kode_pos"
                autoComplete="kode_pos"
                value={values.kode_pos === 0 ? "" : values.kode_pos}
                onChange={handleChangePostal}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="provinsi">Provinsi</label>
              <input
                type="text"
                name="provinsi"
                id="provinsi"
                autoComplete="provinsi"
                value={values.provinsi}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="kota">Kabupaten/Kota</label>
              <input
                type="text"
                name="kota"
                id="kota"
                autoComplete="kota"
                value={values.kota}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="kecamatan">Kecamatan</label>
              <input
                type="text"
                name="kecamatan"
                id="kecamatan"
                value={values.kecamatan}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="desa">Desa</label>
              <select
                name="desa"
                id="desa"
                value={values.desa}
                onChange={handleChange}
              >
                {desaList.length > 0 &&
                  desaList.map(({ code, village }: desaType) => (
                    <option key={code} value={village as string}>
                      {village}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                autoComplete="alamat"
                onChange={handleChange}
                value={values.alamat}
              />
            </div>
            <div className={styles.input_half}>
              <h2 className=" text-sm font-semibold text-rose-500">
                *Alamat disi sesuai Domisili saat ini
              </h2>
            </div>
            <div className="col-span-6 flex items-center">
              <input
                className="rounded-sm"
                type="checkbox"
                name="alamat_sesuai"
                id="alamat_sesuai"
                onChange={handleCheckDomisili}
              />
              <label
                className="ml-2 text-sm font-medium text-gray-500"
                htmlFor="alamat_sesuai"
              >
                Domisili sesuai dengan alamat di identitas (KTP)
              </label>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="dom_kode_pos">Kode Pos</label>
              <input
                type="number"
                name="dom_kode_pos"
                id="dom_kode_pos"
                autoComplete="dom_kode_pos"
                value={values.dom_kode_pos === 0 ? "" : values.dom_kode_pos}
                onChange={handleChangePostal}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="dom_provinsi">Provinsi</label>
              <input
                type="text"
                name="dom_provinsi"
                id="dom_provinsi"
                autoComplete="dom_provinsi"
                value={values.dom_provinsi}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="dom_kota">Kabupaten/Kota</label>
              <input
                type="text"
                name="dom_kota"
                id="dom_kota"
                autoComplete="dom_kota"
                value={values.dom_kota}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="dom_kecamatan">Kecamatan</label>
              <input
                type="text"
                name="dom_kecamatan"
                id="dom_kecamatan"
                autoComplete="dom_kecamatan"
                value={values.dom_kecamatan}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="dom_desa">Desa</label>
              <select
                name="dom_desa"
                id="dom_desa"
                value={values.dom_desa}
                onChange={handleChange}
              >
                {domDesaList.length > 0 &&
                  domDesaList.map(({ code, village }: desaType) => (
                    <option key={code} value={village as string}>
                      {village}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="dom_alamat">Alamat</label>
              <input
                type="text"
                name="dom_alamat"
                id="dom_alamat"
                autoComplete="dom_alamat"
                value={values.dom_alamat}
                onChange={handleChange}
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

export default StepTwo;
