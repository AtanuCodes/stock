import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // theme css

const ModernDateRangePicker = ({ value, onChange }) => {
  const [range, setRange] = useState([
    {
      startDate: value?.from || new Date(),
      endDate: value?.to || addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const today = new Date();
    if (range[0].endDate > today) {
      return; // prevent future selection
    }
    onChange({ from: range[0].startDate, to: range[0].endDate });
  }, [range]);

  return (
    <div className="border p-2 rounded shadow w-full h-[400px] mx-auto">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        maxDate={new Date()}
      />
    </div>
  );
};

export default ModernDateRangePicker;
