import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import type { Dispatch, SetStateAction } from "react";
import styles from "../styles/daftar.module.css";
import InputFileAgunan from "./InputFileAgunan";
import type { UploadFieldBpkb } from "./formTypes";

type dialogType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const uploadArray = [
  {
    name: "bpkb_iden_pemilik",
    label: "Halaman Identitas Pemilik",
    span: "",
  },
  {
    name: "bpkb_iden_kend",
    label: "Halaman Identitas Kendaraan",
    span: "",
  },
  {
    name: "bpkb_reg_pertama",
    label: "Halaman Dokumen Persyaratan Registrasi Pertama",
    span: "",
  },
  {
    name: "foto_stnk",
    label: "Upload Scan / Foto STNK",
    span: "",
  },
  {
    name: "foto_pajak_terakhir",
    label: "Upload Scan / Foto Pajak Terakhir",
    span: "",
  },
  {
    name: "foto_agunan_kendaraan1",
    label: "Upload Foto Agunan Tampak Depan",
    span: "",
  },
  {
    name: "foto_agunan_kendaraan2",
    label: "Upload Foto Agunan Tampak Samping",
    span: "",
  },
  {
    name: "foto_nasabah_agunan",
    label: "Upload Foto Agunan bersama Calon Nasabah",
    span: "",
  },
];

const DialogBPKB = ({ isOpen, setIsOpen }: dialogType) => {
  const handleSave = (e: React.MouseEvent<HTMLElement>): void => {
    console.log(e);
    setIsOpen(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
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
                  Detail Agunan BBKB Kendaraan
                </Dialog.Title>
                <div className="my-8">
                  <div className={styles.form_parrent_el}>
                    <div className={styles.input_half}>
                      <label htmlFor="nomor_bpkb">Nomor BPKB</label>
                      <input
                        type="text"
                        name="nomor_bpkb"
                        id="nomor_bpkb"
                        autoComplete="nomor_bpkb"
                      />
                    </div>
                    <div className={styles.input_half}>
                      <label htmlFor="nomor_registrasi">
                        Nomor Registrasi / Nomor Plat
                      </label>
                      <input
                        type="text"
                        name="nomor_registrasi"
                        id="nomor_registrasi"
                        autoComplete="nomor_registrasi"
                      />
                    </div>
                    <div className={styles.input_three}>
                      <label htmlFor="jenis_kendaraan">Jenis Kendaraan</label>
                      <select
                        name="jenis_kendaraan"
                        id="jenis_kendaraan"
                        autoComplete="jenis_kendaraan"
                      >
                        <option value="Motor">Motor</option>
                        <option value="Mobil">Mobil</option>
                        <option value="Truck">Truck</option>
                        <option value="Kapal">Kapal</option>
                      </select>
                    </div>

                    <div className={styles.input_three}>
                      <label htmlFor="nomor_registrasi">Merk</label>
                      <input
                        type="text"
                        name="merk_kendaraan"
                        id="merk_kendaraan"
                        autoComplete="merk_kendaraan"
                      />
                    </div>
                    <div className={styles.input_three}>
                      <label htmlFor="tahun_pembuatan">Tahun Pembuatan</label>
                      <input
                        type="text"
                        name="tahun_pembuatan"
                        id="tahun_pembuatan"
                        autoComplete="tahun_pembuatan"
                      />
                    </div>
                    <div className={styles.input_full}>
                      <label htmlFor="nama_pemilik">Nama Pemilik</label>
                      <input
                        type="text"
                        name="nama_pemilik"
                        id="nama_pemilik"
                        autoComplete="nama_pemilik"
                      />
                    </div>
                    <div className={styles.input_full}>
                      <label htmlFor="alamat_agunan">
                        Alamat Agunan
                        <span>* tempat di mana kendaraan biasa terparkir</span>
                      </label>
                      <textarea
                        name="alamat_agunan"
                        id="alamat_agunan"
                        autoComplete="alamat_agunan"
                      />
                    </div>
                    {/* scan foto bpkb */}
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
                          />
                        </Fragment>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Simpan
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogBPKB;
