import React from "react";
import nod from "../images/node.png";

const Npm = () => {
    return (
        <>
            <h1>Что Такое npm?</h1>
            <p>npm – это менеджер пакетов, который входит в состав Node.js. В течение многих лет Node широко
                использовался разработчиками JavaScript для обмена инструментами, установки различных модулей и
                управления их зависимостями. Вот почему людям, работающим с Node.js, очень важно понять, что такое
                npm.</p>
            <h1>Как Работает npm?</h1>
            <p>Он работает, выполняя одну из своих двух ролей:</p>
            <ul>
                <li>Это широко используемый репозиторий для публикации проектов Node.js с открытым исходным кодом. Это
                    означает, что это онлайн-платформа, где каждый может публиковать и делиться инструментами,
                    написанными на JavaScript.
                </li>
                <li>npm – это инструмент командной строки, который помогает взаимодействовать с онлайн-платформами,
                    такими как браузеры и серверы. Эта утилита помогает в установке и удалении пакетов, управлении
                    версиями и зависимостями, необходимыми для запуска проекта.
                </li>
            </ul>
            </>
    );
};

export default Npm;