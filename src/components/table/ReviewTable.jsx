import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
  } from "@/components/ui/table";
  import validationHelper from "@/utility/ValidationHelper.js";
  import { FaEye } from "react-icons/fa";
  
  function ReviewTable({
    array = [],
    isHorizontal = true,
    className,
    onEyeClick,
  }) {
    console.log(array);
    return array?.length > 0 ? (
      <Table className={`w-full border ${className}`}>
        {isHorizontal ? (
          <>
            <TableHeader>
              <TableRow className="border-none bg-gray-200">
                {Object.keys(array[0]).map((item, index) => (
                  <TableHead
                    key={index.toString()}
                    className={`p-1 
                                         text-xs font-semibold 
                                         ${
                                           validationHelper?.isNumber(
                                             Object.values(array[0])[index]
                                           )
                                             ? "text-right"
                                             : "text-left"
                                         } text-black h-fit`}
                  >
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {array.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex.toString()}
                  className={`hover:bg-gray-50 border-none ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  {Object.entries(row).map(([key, value], cellIndex) => (
                    <TableCell
                      key={cellIndex.toString()}
                      className={`p-1 text-black text-xs ${
                        validationHelper?.isNumber(value)
                          ? "text-end"
                          : "text-start"
                      } flex items-center space-x-2`}
                    >
                      {key === "Signature" ? (
                        <>
                          <span>{value}</span>
                          <FaEye
                            className="cursor-pointer text-blue-500 hover:text-blue-700 ml-2"
                            onClick={() => onEyeClick(value)}
                          />
                        </>
                      ) : validationHelper?.isNumber(value) ? (
                        parseFloat(value)?.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      ) : (
                        value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <>
            <TableBody>
              {array.map((row, index) => (
                <TableRow
                  key={index.toString()}
                  className="hover:bg-gray-100 border-none"
                >
                  <TableCell className="p-1 w-32 align-top">
                    {Object.keys(row)[0]}
                  </TableCell>
                  <TableCell className="p-1">
                    {Object.keys(row)[0] === "Signature" ? (
                      <div className="flex items-center">
                        <span>{Object.values(row)[0]}</span>
                        <FaEye
                          className="cursor-pointer hover:text-blue-700 ml-2"
                          onClick={() => onEyeClick(Object.values(row)[0])}
                        />
                      </div>
                    ) : (
                      Object.values(row)[0]
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    ) : (
      <div className="border border-primary p-3 text-center">Data Not Found</div>
    );
  }
  
  export default ReviewTable;
  