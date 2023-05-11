import React from 'react';

import { PaginationProps } from '../../types';
import { PaginationWrapper, PageItem } from './styles';

const Pagination: React.FC<PaginationProps> = ({ count, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(count / 10);

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const renderPages = () =>
        Array.from({ length: totalPages }, (_, i) => (
            <PageItem
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageClick(i + 1)}
            >
                {i + 1}
            </PageItem>
    ));

    return (
        <PaginationWrapper>
            <PageItem
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
            >
                Prev
            </PageItem>
            {renderPages()}
            <PageItem
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(currentPage + 1)}
            >
                Next
            </PageItem>
        </PaginationWrapper>
    );
};

export default Pagination;
