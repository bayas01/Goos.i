import React from "react";

const JavaScript = () => {
    return (
        <>
            <h1>JavaScript</h1>
            <p>JavaScript - это увлекательный и гибкий язык программирования. Это одна из основных технологий
                веб-разработки, которую можно использовать как на интерфейсной, так и на внутренней стороне.</p>
            <h5>Почему нам это нравится:</h5>
            <ul>
                <li>Универсальный и прочный</li>
                <li>Front-End дружественный</li>
                <li>Back-End дружественный</li>
                <li>Включает веб-приложения</li>
                <li>Разработка игр</li>
                <li>Мобильные приложения</li>
            </ul>

            <div className="d-flex align-items-center justify-content-center p-5">
                <iframe style={{
                    width: 700,
                    height: 500
                }}
                    src="https://www.youtube.com/embed/watch?v=fHl7UyRjOf0&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk"></iframe>
            </div>

            <a href="https://www.codecademy.com/learn/introduction-to-javascript">Здесь ты можешь по практиковаться</a>
        </>
    );
};

export default JavaScript;