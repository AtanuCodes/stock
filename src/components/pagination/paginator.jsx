import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { generatePaginationLinks } from "./generate-pages";
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function Paginator({currentPage, totalPages, onPageChange, showPreviousNext}) {

    return (
        <Pagination className='m-0 w-fit'>
            <PaginationContent>
                {showPreviousNext && totalPages ? (
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage - 1 < 1}
                        ><ChevronLeft /></PaginationLink>
                    </PaginationItem>
                ) : null}
                {generatePaginationLinks(currentPage, totalPages, onPageChange)}
                {showPreviousNext && totalPages ? (
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange((currentPage <= totalPages-1) ? currentPage + 1 : totalPages)}
                            disabled={currentPage > totalPages - 1}
                        ><ChevronRight /></PaginationLink>
                    </PaginationItem>
                ): null}
            </PaginationContent>
        </Pagination>
    )
}