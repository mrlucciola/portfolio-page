import { FC } from "react";
// mui
import GridProps from "@mui/material/Unstable_Grid2/Grid2Props";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";
// components
import Header from "./Header";
import Body from "./Body";
// utils
import { slugify } from "../../util/slugify";

/** ### Project view
 * Display component showing information about a single project.
 *
 * Consists of a header, image, description, and stack.\
 * Sets a ref in order to call "scrollTo..." within NavProjects.\
 * This ref is stored in MobX state.
 */
const ProjectCard: FC<
  GridProps.Grid2Props & {
    projectIdx: number;
    projectId?: string;
  }
> = ({ ...props }) => {
  const projectIdx = props.projectIdx;
  // state: observables
  const activeProjectIdx: number = useMainStore((s) => s.activeProjectIdx);
  const project = useMainStore((s) => s.projects[projectIdx]);
  const { title } = project;
  // state: actions
  const setActiveProject = useMainStore((s) => s.setActiveProject);

  // logic
  const isActive = projectIdx === activeProjectIdx;

  // event handlers
  const onEventActivateProject = () => {
    if (!isActive) {
      setActiveProject(projectIdx, "");
    }
  };

  return (
    <ListItem
      id={slugify(title)}
      onScroll={onEventActivateProject}
      onMouseOver={onEventActivateProject}
      sx={{ mh: 5, minWidth: "100%", flex: 1 }}
      component={Stack}
      direction="column"
    >
      <Header projectIdx={projectIdx} />
      <Body projectIdx={projectIdx} />
    </ListItem>
  );
};

export default observer(ProjectCard);
