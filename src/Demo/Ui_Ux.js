import React from "react";
import diz from "../images/ui-ux1.jpg"

const Ui_Ux = () => {
    return (
        <>
            <h1>Что такое UX/UI дизайн на самом деле?</h1>
            <p>Очень много недопонимания в среде дизайнеров и разработчиков. Также много вопросов, связанных с UX и UI у
                новичков. UX/UI дизайн — это проектирование любых пользовательских интерфейсов в которых удобство
                использования так же важно как и внешний вид</p>
            <div className="d-flex align-items-center justify-content-center">
                <img src={diz} style={{width: 700, height: 500}} alt=""/>
            </div>
        </>
    );
};

export default Ui_Ux;