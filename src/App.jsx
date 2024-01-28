import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar";
import NewProject from "./components/NewProject/NewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject () {
    setProjectsState(prevProject => {
      return {
        ...prevProject,
        selectedProjectId: null,
      };
    })
  }

  let cotent;
  if ()
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    </main>
  );
}

export default App;
