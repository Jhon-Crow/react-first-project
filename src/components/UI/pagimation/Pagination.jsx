import React from 'react';
import {getPagesArray} from "../../../utils/pages.js";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);


            if (page > totalPages) {
                page = totalPages
            }


    return (
        <div className='page-wrapper'>
            {pagesArray.map(p =>
                // проверка если элемент итерации map =
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page_current' : 'page'}
                >
                        {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;