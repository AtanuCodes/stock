import { PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";

export const generatePaginationLinks = (currentPage, totalPages, onPageChange) => {

    const pages = [];
    if (totalPages <= 6) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        onClick={() => onPageChange(i)}
                        isActive={i === currentPage}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
    } else {
        for (let i = 1; i <= 2; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        onClick={() => onPageChange(i)}
                        isActive={i === currentPage}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        if (2 < currentPage && currentPage < totalPages - 1) {
            pages.push(<PaginationEllipsis />)
            pages.push(
                <PaginationItem key={currentPage}>
                    <PaginationLink
                        onClick={() => onPageChange(currentPage)}
                        isActive={true}
                    >
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        pages.push(<PaginationEllipsis />)
        for (let i = totalPages; i <= totalPages; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        onClick={() => onPageChange(i)}
                        isActive={i === currentPage}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
    }
    return pages;
};