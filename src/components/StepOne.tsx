import React, { useState } from "react";
import styles from "../styles/daftar.module.css";
import type { pegawaiType, pendidikanType } from "../pages/Lists";
import { pendidikanList, PewagaiList } from "../pages/Lists";
import type { setStepType } from "./formTypes";

export const StepOne = ({
  setStep,
  step,
  values,
  handleChange,
}: setStepType) => {
  const [menikah, setMenikah] = useState(false);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(e);
    if (e.target.value === "Menikah") {
      setMenikah(true);
    } else {
      setMenikah(false);
    }
  };
  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_inner}>
          <div className={styles.form_parrent_el}>
            <div className={styles.input_full}>
              <label htmlFor="nama_petugas">Nama Petugas</label>
              <input
                type="text"
                name="nama_petugas"
                id="nama_petugas"
                autoComplete="nama_petugas"
                value={values.nama_petugas}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="nik">
                Nomor Induk Kependudukan
                <span>*note</span>
              </label>
              <input
                type="number"
                name="nik"
                id="nik"
                autoComplete="nik"
                value={values.nik}
                onChange={handleChange}
                max={16}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="nama_lengkap">Nama Lengkap</label>
              <input
                type="text"
                name="nama_lengkap"
                id="nama_lengkap"
                autoComplete="nama_lengkap"
                value={values.nama_lengkap}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="nama_alias">Nama Alias</label>
              <input
                type="text"
                name="nama_alias"
                id="nama_alias"
                autoComplete="nama_alias"
                value={values.nama_alias}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="gender">Jenis Kelamin</label>
              <select
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <option value="LAKI_LAKI">Laki-Laki</option>
                <option value="PEREMPUAN">Perempuan</option>
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="tempat_lahir">Tempat Lahir</label>
              <input
                type="text"
                name="tempat_lahir"
                id="tempat_lahir"
                autoComplete="tempat_lahir"
                value={values.tempat_lahir}
                onChange={handleChange}
              />
            </div>

            <div className={styles.input_half}>
              <div className="datepicker">
                <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                <input
                  type="date"
                  name="tanggal_lahir"
                  id="tanggal_lahir"
                  autoComplete="tanggal_lahir"
                  value={values.tanggal_lahir.toString()}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="pendidikan">Pendidikan</label>
              <select
                name="pendidikan"
                id="pendidikan"
                value={values.pendidikan}
                onChange={handleChange}
              >
                {pendidikanList.map((value: pendidikanType, index: number) => (
                  <option key={index} value={value.value}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="pernikahan">Status Pernikahan</label>
              <select
                name="pernikahan"
                id="pernikahan"
                value={values.pernikahan}
                onChange={handleSelect}
              >
                <option value="Tidak Menikah">Tidak Menikah</option>
                <option value="Menikah">Menikah</option>
                <option value="Cerai Hidup">Cerai Hidup</option>
                <option value="Cerai Mati">Cerai Mati</option>
              </select>
            </div>
            {menikah ? (
              <>
                <div className={styles.input_half}>
                  <label htmlFor="nik_pasangan">
                    Nomor Induk Kependudukan Pasangan <span>*</span>
                  </label>
                  <input
                    type="number"
                    name="nik_pasangan"
                    id="nik_pasangan"
                    autoComplete="nik_pasangan"
                    value={values.nik_pasangan}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.input_half}>
                  <label htmlFor="nama_pasangan">Nama Lengakap Pasangan</label>
                  <input
                    type="text"
                    name="nama_pasangan"
                    id="nama_pasangan"
                    autoComplete="nama_pasangan"
                    value={values.nama_pasangan}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : null}
            <div className={styles.input_half}>
              <label htmlFor="pekerjaan">Pekerjaan</label>
              <select
                name="pekerjaan"
                id="pekerjaan"
                value={values.pekerjaan}
                onChange={handleChange}
              >
                {PewagaiList.map((value: pegawaiType, index: number) => (
                  <option className="mb-4" key={index} value={value.value}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input_half}>
              <label htmlFor="tempat_kerja">Keterangan Tempat Kerja</label>
              <input
                type="text"
                name="tempat_kerja"
                id="tempat_kerja"
                autoComplete="tempat_kerja"
                value={values.tempat_kerja}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="alamat_kerja">Alamat Tempat Kerja</label>
              <textarea
                name="alamat_kerja"
                id="alamat_kerja"
                autoComplete="alamat_kerja"
                value={values.alamat_kerja}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="tel_tempat_kerja">Nomor Telp. Tempat Kerja</label>
              <input
                type="tel"
                name="tel_tempat_kerja"
                id="tel_tempat_kerja"
                autoComplete="tel_tempat_kerja"
                value={values.tel_tempat_kerja}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_half}>
              <label htmlFor="nomor">Nomor Telepon / Handphone</label>
              <input
                type="tel"
                name="nomor"
                id="nomor"
                autoComplete="nomor"
                onChange={handleChange}
                value={values.nomor}
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
      <span className="float-right my-4 inline py-2 px-5 align-middle text-sm font-medium leading-4 text-gray-600">
        Step : {step}/<span className="font-semibold">5</span>
      </span>
    </>
  );
};
