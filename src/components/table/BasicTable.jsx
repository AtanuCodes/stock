import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import validationHelper from "@/utility/ValidationHelper.js";

function BasicTable({array = [], isHorizontal = true, className,}) {
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
                        {
                            array.map((row, index) => <TableRow key={index.toString()} className={`hover:bg-gray-50 border-none ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                                {Object.values(row).map((cell, i2) =>
                                    <TableCell key={i2.toString()} className={`p-1 text-black text-xs ${validationHelper?.isNumber(cell) ? 'text-end' : 'text-start'}`}>
                                        {validationHelper?.isNumber(cell) ? parseFloat(cell)?.toLocaleString(undefined, {maximumFractionDigits: 2}) : cell}
                                    </TableCell>)}
                            </TableRow>)
                        }
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
                                <TableCell className="p-1 w-4 align-top">:</TableCell>
                                <TableCell className="p-1 align-top">{Object.values(row)[0]}</TableCell>
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
export default BasicTable;
  