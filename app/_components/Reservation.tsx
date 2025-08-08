/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";

export default async function Reservation({ cabin }: any) {
  //   const param1 = await params;
  //   const param2 = param1.cabinId;
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookDates={bookedDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
