function Back ( {handleClickedBorne, activeBorne} ) {

    return (
        <div className={"back " + (activeBorne === "" ? "hidden" : "visible")}>
            <button
                onClick={() => handleClickedBorne("")}
            >
                &#8592;
            </button>
            <h2>Borne {activeBorne}</h2>
        </div>
    );
};

export default Back;