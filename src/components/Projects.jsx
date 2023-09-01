import React from "react";
import { useTranslation } from "react-i18next";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      id: 1,
      title: "Books",
      descr:
        "React & React DOM | React Router DOM | React Toastify | Create React App (react-scripts) | gh-pages",
      image: `${process.env.PUBLIC_URL}/images/book.png`,
      ghPages: "https://valeriakul.github.io/book-react/",
      code: "https://github.com/ValeriaKul/book",
    },
    {
      id: 2,
      title: "Burgers",
      descr: "Angular | TypeScript | Reactive Forms | HttpClient",
      image: `${process.env.PUBLIC_URL}/images/burgers.png`,
      ghPages: "https://valeriakul.github.io/burgers/",
      code: "https://github.com/ValeriaKul/burgers_angular",
    },
    {
      id: 3,
      title: "ToDo list",
      descr: "React | FontAwesome | Bootstrap | gh-pages",
      image: `${process.env.PUBLIC_URL}/images/todo.png`,
      ghPages: "https://valeriakul.github.io/TODO-react/",
      code: "https://github.com/ValeriaKul/TODO-react",
    },
    {
      id: 4,
      title: "Garden",
      descr:
        "React | Redux & React-Redux | React Router DOM | React Icons | Axios | React Toastify | Node Sass |  ",
      image: `${process.env.PUBLIC_URL}/images/garden.png`,
      ghPages: "https://valeriakul.github.io/TODO-react/",
      code: "https://github.com/ValeriaKul/GardenReact",
    },
    {
      id: 5,
      title: "TBStore",
      descr: "React | Redux & Redux Thunk | React Router DOM | React Icons",
      image: `${process.env.PUBLIC_URL}/images/tbstore.png`,
      ghPages: "https://valeriakul.github.io/TODO-react/",
      code: "https://github.com/ValeriaKul/TBStore",
    },
    {
      id: 6,
      title: "Velozar",
      descr: "React | React Router DOM | React Icons | i18next & react-i18next",
      image: `${process.env.PUBLIC_URL}/images/velozar.png`,
      ghPages: "https://valeriakul.github.io/velozavr/",
      code: "https://github.com/ValeriaKul/velozavr",
    },
  ];
  return (
    <section id="projects" className="projects">
      <p className="title">{t("Projects")}</p>
      <div className="projects_container">
        {projects.map((elem) => (
          <ProjectItem key={elem.id} {...elem} />
        ))}
      </div>
    </section>
  );
}
