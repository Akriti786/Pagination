// const Pagination = ({
//     page,
//     totalPages,
//     setPage
// }) => {

//     const pages = [];

//     for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//     }


//     return (
//         <div>

//             <button
//                 disabled={page === 1}
//                 onClick={() => setPage(page - 1)}
//             >
//                 Previous
//             </button>


//             {pages.map((pageNumber) => (

//                 <button
//                     key={pageNumber}
//                     onClick={() => setPage(pageNumber)}
//                 >
//                     {pageNumber}
//                 </button>

//             ))}


//             <button
//                 disabled={page === totalPages}
//                 onClick={() => setPage(page + 1)}
//             >
//                 Next
//             </button>

//         </div>
//     );
// };

// export default Pagination;








const Pagination = ({
    page,
    totalPages,
    setPage
}) => {

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>

            <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
            >
                Previous
            </button>


            {pages.map((pageNumber) => (

                <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                >
                    {pageNumber}
                </button>

            ))}


            <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;