import {
  BuildingLibraryIcon,
  ChevronRightIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Collapse } from "@material-tailwind/react";
import React, { useState } from "react";
import Image from "next/image";

export default function GovPagesInfo() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <div className="h-[30px] w-full bg-white flex  justify-center space-x-1">
        <div className="w-10/12 flex items-center space-x-1">
          <Image
            alt=""
            width={1920}
            height={1080}
            src={"/images/rd.jpg"}
            className="w-10 p-2"
          />
          <p className="text-black text-xs">
            Esta es una web oficial del Gobierno de la República Dominicana
          </p>
          <div>
            <button
              onClick={toggleOpen}
              className="w-full h-full flex justify-between items-center text-lightBlue-500 text-left font-bold text-xs underline"
            >
              <p>Así es como puedes saberlo</p>

              <div>
                <ChevronRightIcon
                  className={`${
                    open ? "rotate-90 duration-300" : "rotate-0 duration-300"
                  } rotate-0 w-3 h-3`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Collapse open={open} className="flex justify-center bg-white">
        <div className="w-10/12 h-[150px] grid grid-cols-2">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-600 w-14 h-14 flex items-center justify-center">
              <BuildingLibraryIcon className="w-8 h-8 text-white" />
            </div>
            <div className="w-10/12 space-y-2">
              <p className="text-blue-950 text-xs font-bold">
                Los sitios web oficiales utilizan .gob.do, .gov.do o .mil.do
              </p>
              <p className="text-blue-950 text-xs">
                Un sitio .gob.do, .gov.do o .mil.do significa que pertenece a
                una organización oficial del Estado dominicano.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-600 w-14 h-14 flex items-center justify-center">
              <LockClosedIcon className="w-8 h-8 text-white" />
            </div>
            <div className="w-10/12 space-y-2">
              <p className="text-blue-950 text-xs font-bold">
                Los sitios web oficiales .gob.do, .gov.do o .mil.do seguros usan
                HTTPS
              </p>
              <p className="text-blue-950 text-xs">
                Un candado (🔒) o https:// significa que estás conectado a un
                sitio seguro dentro de .gob.do o .gov.do. Comparte información
                confidencial solo en los sitios seguros de .gob.do o gov.do.
              </p>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
