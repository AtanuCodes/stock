import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel
} from '@tanstack/react-table'
import React, {useCallback, useState} from "react";
import {Input} from "@/components/ui/input.jsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.jsx";
import {ArrowDownWideNarrow, ArrowUpNarrowWide, Search, Filter as FilterIcon, EllipsisVertical} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import InputPaginator from "@/components/pagination/InputPaginator.jsx";
import {Card, CardContent} from "@/components/ui/card.jsx";
import RSelect, {FloatingSelect} from "@/components/combobox/RSelect.jsx";
import {UtilityStore} from "@/store/utility-store.js";
import {JsonToExcel} from "@/utility/UtilityFunctions.js";
import {RiFileExcel2Line} from "react-icons/ri";

const defaultRenderItem = (row, isSelected, toggleSelection) => (
    <Card
        key={row.id}
        onClick={() => toggleSelection(row.id)}
        className={`p-0 shadow-md hover:shadow-lg transition-shadow ${
            isSelected ? 'bg-gray-200' : ''
        }`}
    >
        <CardContent className="pt-5">
            {row.getVisibleCells().map((cell) => (
                <div key={cell.id} className="mb-0">
                    <strong>{cell.column.columnDef.header}:</strong> {cell.getValue()}
                </div>
            ))}
        </CardContent>
    </Card>
);

function ReactTable({
                        data,
                        columns,
                        rowSelected,
                        setRowSelected,
                        showFilter = false,
                        renderType = 'table',
                        renderItem = defaultRenderItem,
                        cardContainerClassName = 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
                        tableContainerClassName = '',
                        hideTopSection = false,
                        hideBottomSection = false,
                        isSingleSelect = false,
                        titleLeftContent = null,
                        titleRightContent = null,
                        size = 'lg',
                        hideSL = false,
                        perPage = 10,
                        excel,
                        handleOnClick,
                        showSearch = true
                    }) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [sorting, setSorting] = React.useState([]);
    const [showColumnFilter, setShowColumnFilter] = useState(false);
    const [pagination, setPagination] = useState({
        pageSize: perPage,
        pageIndex: 0
    })
    const {loading} = UtilityStore();
    const hasFooter = columns?.some(col => !!col.footer);
    const showFooter = rowSelected || hasFooter;

    const toggleSelection = useCallback(
        (rowId) => {
            setRowSelection((prevSelection) => {
                let newSelection = {...prevSelection};

                if (isSingleSelect) {
                    // If single-select mode, clear other selections
                    newSelection = {[rowId]: !prevSelection[rowId]};
                } else {
                    // Otherwise, toggle the selected row
                    newSelection[rowId] = !prevSelection[rowId];
                }

                const selectedRows = Object.keys(newSelection).reduce((acc, key) => {
                    if (newSelection[key]) {
                        const index = parseInt(key, 10);
                        const row = data[index];
                        if (row) {
                            acc.push(row);
                        }
                    }
                    return acc;
                }, []);
                setRowSelected?.(selectedRows);
                return newSelection;
            });
        },
        [data, setRowSelected, isSingleSelect]
    );

    React.useEffect(() => {
        // If rowSelected is empty, clear all selections
        if (rowSelected && rowSelected?.length === 0) {
            setRowSelection({});
        }
        // If rowSelected has items, map them to indices in data
        else if (rowSelected && rowSelected?.length > 0 && isSingleSelect) {
            const newSelection = {};
            rowSelected.forEach((selectedRow) => {
                const index = data.findIndex((row) => row.id === selectedRow.id);
                if (index !== -1) {
                    newSelection[index] = true;
                }
            });
            setRowSelection(newSelection);
        }
    }, [rowSelected, data]); // Trigger

    const PerPageList = [
        {
            value: 10,
            label: `Show 10/${data?.length}`
        },
        {
            value: 20,
            label: `Show 20/${data?.length}`
        },
        {
            value: 30,
            label: `Show 30/${data?.length}`
        },
        {
            value: 40,
            label: `Show 40/${data?.length}`
        },
        {
            value: 50,
            label: `Show 50/${data?.length}`
        },
        {
            value: 100,
            label: `Show 100/${data?.length}`
        },
        {
            value: 200,
            label: `Show 200/${data?.length}`
        },
        {
            value: 500,
            label: `Show 500/${data?.length}`
        }
    ]

    const table = useReactTable({
        data,
        columns,
        state: {rowSelection, rowSelected, sorting, globalFilter, pagination},
        onPaginationChange: setPagination,
        enableRowSelection: true, //enable row selection for all rows
        getFilteredRowModel: getFilteredRowModel(),
        // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
        onRowSelectionChange: useCallback(
            (valueFn) => {
                if (typeof valueFn === "function") {
                    const updatedRowSelection = valueFn(rowSelection);
                    setRowSelection(updatedRowSelection);

                    const selectedRows = Object.keys(updatedRowSelection).reduce(
                        (acc, key) => {
                            if (updatedRowSelection[key]) {
                                const index = parseInt(key, 10);
                                const row = data[index];
                                if (row) {
                                    acc.push(row);
                                }
                            }
                            return acc;
                        }, []);

                    setRowSelected?.(selectedRows);
                }
            },
            [data, setRowSelected, rowSelection]
        ),
        getCoreRowModel: getCoreRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(), //client-side sorting
        onSortingChange: setSorting,
        debugTable: true,
    })

    return (
        <>
            {!hideTopSection && <div className='flex items-center justify-between mb-2'>
                <div>{titleLeftContent}</div>
                <div className='flex items-center'>
                    <div className='hidden md:flex md:space-x-2 md:items-end'>
                        {titleRightContent}
                        {
                            excel && <button
                                className='bg-transparent hover:bg-red-50 text-sm rounded-0 m-0 h-fit p-1 me-2 border-b border-dashed border-destructive flex items-center text-destructive'
                                onClick={() => {
                                    // JsonToExcel(data.filter((item) => {
                                    //     console.log(Object.keys(item))
                                    //     return excel?.Columns.includes(col => col.accessorKey === Object.keys(item))
                                    // }), excel.Name);
                                    JsonToExcel(data, excel.Name);
                                }}><RiFileExcel2Line size={16} className='me-2'/>Excel</button>
                        }
                        {
                            showFilter && <Button
                                variant='outline'
                                className='p-2 px-4 border'
                                onClick={() => setShowColumnFilter(!showColumnFilter)}
                            >
                                <FilterIcon className='me-2' size={16}/> Filter
                            </Button>
                        }
                        <RSelect
                            defaultValue={table.getState().pagination.pageSize}
                            onChange={e => {
                                console.log(e)
                                table.setPageSize(Number(e))
                            }}
                            className='block w-full'
                            // className='w-[100px] min-w-32'
                            options={PerPageList}
                        />
                        {showSearch && <Input
                            value={globalFilter ?? ''}
                            onChange={e => setGlobalFilter(e.target.value)}
                            placeholder="Search all columns..."
                            startIcon={Search}
                        />}
                    </div>

                    <div className='md:hidden inline-grid grid-cols-1'>
                        <Popover>
                            <PopoverTrigger><EllipsisVertical/></PopoverTrigger>
                            <PopoverContent className='p-2 me-4 space-y-2'>
                                {titleRightContent}
                                {
                                    showFilter && <div
                                        className='p-2 flex items-center cursor-pointer'
                                        onClick={() => setShowColumnFilter(!showColumnFilter)}
                                    >
                                        <FilterIcon className='me-2' size={16}/> Filter
                                    </div>
                                }
                                <RSelect
                                    defaultValue={table.getState().pagination.pageSize}
                                    onChange={e => {
                                        console.log(e)
                                        table.setPageSize(Number(e))
                                    }}
                                    className=''
                                    options={PerPageList}
                                />
                                {showSearch && <Input
                                    value={globalFilter ?? ''}
                                    onChange={e => setGlobalFilter(e.target.value)}
                                    placeholder="Search all columns..."
                                    startIcon={Search}
                                />}
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>}

            {
                renderType === 'table' && (loading ? <div
                        className='h-[250px] w-full mx-auto flex justify-center text-center text-gray-700 font-semibold text-base'>Loading...
                        Please wait</div> :
                    <ScrollArea className={`w-full rounded-md border h-[calc(100vh-265px)] ${tableContainerClassName}`}>
                        <table className='w-full caption-bottom overflow-auto'>
                            <thead className="bg-gray-200 sticky top-0">
                            {table.getHeaderGroups().map(headerGroup => (<tr key={headerGroup.id}>
                                {rowSelected && <th className={`text-start ${size === "sm" ? 'p-2' : 'p-3'}`} colSpan={1}>
                                    <div>
                                        <IndeterminateCheckbox{...{
                                            checked: table.getIsAllRowsSelected(),
                                            indeterminate: table.getIsSomeRowsSelected(),
                                            onChange: table.getToggleAllRowsSelectedHandler(),
                                        }}/>
                                    </div>
                                </th>}
                                {!hideSL &&
                                    <th className={`text-start ${size === "sm" ? 'p-2 text-xs' : 'p-3'}`} colSpan={1}>
                                        <div>#</div>
                                    </th>}
                                {headerGroup.headers.map(header => {
                                    return (<th className={`text-start ${size === "sm" ? 'p-2 text-xs' : 'p-3'}`}
                                                key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                                                title={
                                                    header.column.getCanSort()
                                                        ? header.column.getNextSortingOrder() === 'asc'
                                                            ? 'Sort ascending'
                                                            : header.column.getNextSortingOrder() === 'desc'
                                                                ? 'Sort descending'
                                                                : 'Clear sort'
                                                        : undefined
                                                }
                                            >
                                                <div className='flex items-center text-nowrap'
                                                     onClick={header.column.getToggleSortingHandler()}>{flexRender(header.column.columnDef.header, header.getContext())}{{
                                                    asc: <ArrowUpNarrowWide className='ms-2' size={20}/>,
                                                    desc: <ArrowDownWideNarrow className='ms-2' size={20}/>,
                                                }[header.column.getIsSorted()] ?? null}</div>
                                                {header.column.getCanFilter() && showColumnFilter ? (
                                                    <div><Filter column={header.column} table={table}/></div>) : null}
                                            </div>
                                        )}
                                    </th>)
                                })}
                            </tr>))}
                            </thead>
                            <tbody className=''>
                            {table.getRowModel().rows.map((row, idx) => {
                                return (
                                    <tr onClick={() => typeof handleOnClick === 'function' ? handleOnClick(row.index, row.original) : console.log(row.original)}
                                        className={`${idx === table.getRowModel().rows?.length - 1 ? 'border-0' : 'border-b'} border-b-gray-200 ${row.getIsSelected() ? "bg-gray-200" : ""}`}
                                        key={row.id}>
                                        {rowSelected && <td className={`${size === "sm" ? 'p-2 text-xs' : 'p-3'}`}>
                                            <IndeterminateCheckbox{...{
                                                checked: row.getIsSelected(),
                                                disabled: !row.getCanSelect(),
                                                indeterminate: row.getIsSomeSelected(),
                                                onChange: row.getToggleSelectedHandler(),
                                            }}/>
                                        </td>}
                                        {!hideSL && <td className={`text-start ${size === "sm" ? 'p-2 text-xs' : 'p-3'}`}
                                                        colSpan={1}>
                                            {row.index + 1}
                                        </td>}
                                        {row.getVisibleCells().map(cell => {
                                            return (<td className={`text-start ${size === "sm" ? 'p-2 text-xs' : 'p-3'}`}
                                                        key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>)
                                        })}
                                    </tr>
                                )
                            })}
                            </tbody>
                            {showFooter && (
                                <tfoot className="sticky bottom-0 bg-secondary">
                                <tr className='p-0'>
                                    {rowSelected && (
                                        <td className={`text-start ${size === "sm" ? "p-2 text-xs" : "p-3"}`}>
                                            <IndeterminateCheckbox
                                                {...{
                                                    checked: table.getIsAllPageRowsSelected(),
                                                    indeterminate: table.getIsSomePageRowsSelected(),
                                                    onChange: table.getToggleAllPageRowsSelectedHandler(),
                                                }}
                                            />
                                        </td>
                                    )}
                                    {!hideSL && (
                                        <td className={`text-start ${size === "sm" ? "p-2 text-xs" : "p-3"} bg-gray-200`}></td>
                                    )}
                                    {table.getHeaderGroups()[0].headers.map((header) => (
                                        header.column.columnDef?.footer
                                            ? <td key={header.id} className={`text-start ${size === "sm" ? "p-2 text-xs" : "p-3"} bg-gray-200 font-bold`} colSpan={header.colSpan}>
                                                {flexRender(header.column.columnDef.footer, header.getContext())}
                                            </td>
                                            : <td key={header.id} className={`bg-gray-200`} colSpan={header.colSpan}></td>
                                    ))}
                                </tr>
                                </tfoot>
                            )}
                        </table>
                        <ScrollBar orientation='horizontal'/>
                        <ScrollBar orientation='vertical'/>
                    </ScrollArea>)
            }
            {
                renderType === 'card' && (loading ?
                    <div className='h-[250px] w-full flex justify-center items-center'>Loading...</div> :
                    <div className={`grid gap-3 ${cardContainerClassName}`}>
                        {table.getRowModel()?.rows.map((row) => renderItem(row, !!rowSelection[row.id], toggleSelection))}
                    </div>)
            }
            <div className="h-2"/>
            {!hideBottomSection &&
                <div className="flex items-center justify-end gap-2">
                    <InputPaginator
                        currentPage={table.getState().pagination.pageIndex + 1}
                        totalPages={table.getPageCount()}
                        onPageChange={(pageNumber) => table.setPageIndex(pageNumber - 1)}
                        showPreviousNext
                    />
                </div>
            }
        </>
    )
}

function Filter({column}) {
    // const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const {filterVariant} = column.columnDef.meta ?? {}
    const columnFilterValue = column.getFilterValue()

    return filterVariant === "range" ? (
        <div>
            <div className="flex space-x-2">
                {/* See faceted column filters example for min max values functionality */}
                <DebouncedInput
                    type="number"
                    value={(columnFilterValue)?.[0] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [value, old?.[1]])
                    }
                    placeholder={`Min`}
                    className="w-20 font-thin px-1"
                />
                <DebouncedInput
                    type="number"
                    value={(columnFilterValue)?.[1] ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [old?.[0], value])
                    }
                    placeholder={`Max`}
                    className="w-20 font-thin px-1"
                />
            </div>
            {/*<div className="h-1"/>*/}
        </div>
    ) : filterVariant === 'select' ? (
        <select
            className='font-thin w-40 px-1'
            onChange={e => column.setFilterValue(e.target.value)}
            value={columnFilterValue?.toString()}
        >
            {/* See faceted column filters example for dynamic select options */}
            <option value="">All</option>
            <option value="complicated">complicated</option>
            <option value="relationship">relationship</option>
            <option value="single">single</option>
        </select>
    ) : filterVariant === 'date' ? (
            <div className="flex space-x-2">
                <DebouncedInput
                    type="datetime-local"
                    value={columnFilterValue?.[0]?.slice(0, 16) ?? ''}
                    onChange={value => {
                        console.log(value ? value?.concat(":00.999Z") : "");
                        column.setFilterValue((old) => [value ? value?.concat(":00.999Z") : "", old?.[1] ?? ""])
                    }}
                    placeholder={`Min`}
                    className="w-25 font-thin px-1"
                />
                <DebouncedInput
                    type="datetime-local"
                    value={(columnFilterValue)?.[1]?.slice(0, 16) ?? ''}
                    onChange={value =>
                        column.setFilterValue((old) => [old?.[0] ?? "", value ? value?.concat(":00.999Z") : ""])
                    }
                    placeholder={`Max`}
                    className="w-25 font-thin px-1"
                />
            </div>
        ) :
        (
            <DebouncedInput
                className="w-40 font-thin px-1"
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search...`}
                type="text"
                value={(columnFilterValue ?? '')}
            />
            // See faceted column filters example for datalist search suggestions
        )
}

// eslint-disable-next-line react-refresh/only-export-components
export const dateFilterFn = (row, columnId, filterValue) => {
    const rowDate = new Date(row.getValue(columnId));  // Translate the row's value to a Date object
    const minDate = filterValue[0] ? new Date(filterValue[0]) : null;
    const maxDate = filterValue[1] ? new Date(filterValue[1]) : null;

    // If a min date is specified, check if the row date is greater than or equal to it
    if (minDate && rowDate < minDate) return false;

    // If a max date is specified, check if the row date is less than or equal to it
    return !(maxDate && rowDate > maxDate);
}

function DebouncedInput({value: initialValue, onChange, debounce = 0, ...props}) {
    const [value, setValue] = React.useState(initialValue)

    React.useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input {...props} value={value} onChange={e => setValue(e.target.value)}/>
    )
}

function IndeterminateCheckbox({indeterminate, className = '', ...rest}) {
    const ref = React.useRef(null)

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ' cursor-pointer'}
            {...rest}
        />
    )
}

export default ReactTable