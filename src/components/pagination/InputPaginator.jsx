import {Pagination, PaginationContent, PaginationItem, PaginationLink} from "@/components/ui/pagination.jsx";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";

const InputPaginator = ({currentPage, totalPages, onPageChange, showPreviousNext}) => {
    return (
        <Pagination className='m-0 w-fit '>
            <PaginationContent className="bg-blue-50 rounded-lg">
                <PaginationItem >
                    <PaginationLink
                        onClick={() => onPageChange(1)}
                        disabled={currentPage - 1 < 1}
                    ><ChevronsLeft/></PaginationLink>
                </PaginationItem>
                {showPreviousNext && totalPages ? (
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage - 1 < 1}
                        ><ChevronLeft/></PaginationLink>
                    </PaginationItem>
                ) : null}
                <span> Page
                    <input
                        type="number"
                        min="1"
                        max={totalPages}
                        value={currentPage}
                        onChange={(e) => onPageChange(e.target.value)}
                        className="p-0 w-12 border mx-2 text-center"
                    /> of {totalPages}
                </span>
                {showPreviousNext && totalPages ? (
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange((currentPage <= totalPages - 1) ? currentPage + 1 : totalPages)}
                            disabled={currentPage > totalPages - 1}
                        ><ChevronRight/></PaginationLink>
                    </PaginationItem>
                ) : null}
                <PaginationItem>
                    <PaginationLink
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage - 1 < 1}
                    ><ChevronsRight/></PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
};

export default InputPaginator;