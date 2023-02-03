interface PaginationProps {
    totalResults: number,
    currentPage: number,
    pageSize: number,
}

export default function Pagination({ totalResults, currentPage, pageSize }: PaginationProps): JSX.Element {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const totalPages = Math.ceil(totalResults / pageSize);
    const previousPageUrl = previousPage !== 0 ? `/page/${previousPage}` : null;
    const nextPageUrl = nextPage <= totalPages ? `/page/${nextPage}` : null;

    return (
        <>
            <div className="pagination">
                <div className="pagination__previous-page">
                    {previousPageUrl && <a href={previousPage === 1 ? "/" : previousPageUrl}>{previousPage}</a>}
                </div>
                <div className="pagination__current-page">
                    {currentPage}
                </div>
                <div className="pagination__next-page">
                    {nextPageUrl && <a href={nextPageUrl}>{nextPage}</a>}
                </div>
            </div>
        </>
    )
}