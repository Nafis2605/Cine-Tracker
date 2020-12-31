import React from "react"

const Pagination = (props) => {
    const pageLinks = []
    for (let i = 1; i <= props.totalPages; i++) {
        let isActive;
        if (props.currentPage == i) {
            isActive = "active"
        } else {
            isActive = ""
        }

        let classes = "wave-effect " + isActive

        pageLinks.push(<button
            className={classes}
            key={i}
            style={
                {
                    fontSize: 20,
                    padding: 10,
                    margin: 10,
                    alignItems: "center"
                }
            }
            onClick={
                () => {
                    props.nextPage(i)
                }
            }
        >
            {i}
        </button >)


    }

    return (
        <div className="container" style={{
            alignItems: "center"
        }}>
            <div className="row">
                <div >
                    {pageLinks}
                </div>
            </div>

        </div >
    )
}

export default Pagination;