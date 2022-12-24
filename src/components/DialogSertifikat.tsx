import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import type { Dispatch, SetStateAction, FormEvent, ChangeEvent } from "react";
import styles from "../styles/daftar.module.css";
import InputFileAgunan from "./InputFileAgunan";
import type { UploadFieldBpkb } from "./formTypes";
import axios from "axios";

type dialogType = {
  sertifikatOpen: boolean;
  setSertifikatOpen: Dispatch<SetStateAction<boolean>>;
};

const uploadArray = [
  {
    name: "sert_kepemilikan",
    label: "Upload Scan / Foto Bukti Kepemilikan",
    span: "",
  },
  {
    name: "sert_pajak_tahun_terakhir",
    label: "Upload Scan / Foto SPPT Pajak Setahun Terakhir",
    span: "",
  },
  {
    name: "sert_foto_agunan",
    label: "Upload Foto Agunan",
    span: "",
  },
];

const DialogSertifikat = ({
  sertifikatOpen,
  setSertifikatOpen,
}: dialogType) => {
  const initialState = {
    cert_jenis_kepemilikan: "",
    cert_bukti_kepemilikan: "",
    cert_njop: "",
    nama_pemilik: "",
    alamat_agunan: "",
    sert_kepemilikan: "",
    sert_pajak_tahun_terakhir: "",
    sert_foto_agunan: "",
  };
  const [formDatax, setFormDatax] = useState(initialState);
  const handleChange = (e: ChangeEvent) => {
    e.stopPropagation();
    setFormDatax({ ...formDatax, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).filter(
      ({ type }: any) => type === "file"
    );

    fileInput.map(async ({ files, name }: any) => {
      if (files.length > 0) {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "form_bank");
        await axios
          .post(
            "https://api.cloudinary.com/v1_1/doag3bpio/image/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then(({ data }) => setFormDatax({ ...formDatax, [name]: data.url }));
      }
    });
  };
  console.log(formDatax);
  return (
    <Transition appear show={sertifikatOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => null}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Agunan Sertifikat Tanah
                </Dialog.Title>
                <form onSubmit={handleSave}>
                  <div className="my-8">
                    <div className={styles.form_parrent_el}>
                      <div className={styles.input_three}>
                        <label htmlFor="cert_jenis_kepemilikan">
                          Jenis Kepemilikan<span>*</span>
                        </label>
                        <select
                          name="cert_jenis_kepemilikan"
                          id="cert_jenis_kepemilikan"
                          autoComplete="cert_jenis_kepemilikan"
                          onChange={handleChange}
                        >
                          <option value="SHM">SHM</option>
                          <option value="SHGB">SHGB</option>
                          <option value="Letter C / Surat Girik">
                            Letter C / Surat Girik
                          </option>
                        </select>
                      </div>
                      <div className={styles.input_three}>
                        <label htmlFor="cert_bukti_kepemilikan">
                          Nomor Bukti Kepemilikan<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="cert_bukti_kepemilikan"
                          id="cert_bukti_kepemilikan"
                          autoComplete="cert_bukti_kepemilikan"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className={styles.input_three}>
                        <label htmlFor="cert_njop">
                          NJOP<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="cert_njop"
                          id="cert_njop"
                          autoComplete="cert_njop"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className={styles.input_full}>
                        <label htmlFor="nama_pemilik">Nama Pemilik</label>
                        <input
                          type="text"
                          name="nama_pemilik"
                          id="nama_pemilik"
                          autoComplete="nama_pemilik"
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.input_full}>
                        <label htmlFor="alamat_agunan">
                          Alamat Agunan
                          <span>* (Tanah)</span>
                        </label>
                        <textarea
                          name="alamat_agunan"
                          id="alamat_agunan"
                          autoComplete="alamat_agunan"
                          onChange={handleChange}
                        />
                      </div>
                      {/* scan foto sertifikat */}
                      {uploadArray.map(
                        (
                          { name, label, span }: UploadFieldBpkb,
                          index: number
                        ) => (
                          <Fragment key={index as number}>
                            <InputFileAgunan
                              name={name}
                              label={label}
                              span={span}
                              handleChange={handleChange}
                            />
                          </Fragment>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogSertifikat;
