import React from "react";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { SvgIconTypeMap, Tooltip } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { MuiRouterLink } from "./components/MuiRouterLink";

import CreaturesPng from "./images/nav/creatures.png";
import TraitsPng from "./images/nav/traits.png";
import SpellsPng from "./images/nav/spells.png";
import StatusEffectsPng from "./images/nav/status_effects.png";

import GitLightSvg from "./images/nav/github/favicon-light.svg";
import GitDarkSvg from "./images/nav/github/favicon-dark.svg";

import AuthorJpg from "./images/nav/author.jpg";

import SteamJpg from "./images/nav/steam.jpg";

import SourceIcon from "@mui/icons-material/Source";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface RouteData {
  readonly url: string;
  readonly title: string;
  readonly iconComponent:
    | string
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface INavProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (isDarkTheme: boolean) => void;
  isNavOpen: boolean;
}

export default function Nav({
  isDarkTheme,
  setIsDarkTheme,
  isNavOpen,
}: INavProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const iconWidth = isMd ? 32 : 24;
  const itemTextStyle = { lineHeight: `${iconWidth}px`, margin: "0px" };
  const drawerWidth = isNavOpen ? 240 : iconWidth + 26;

  function createIconLinkElement(routeData: RouteData): JSX.Element {
    // Check if the iconComponent is base64 img data or assume it's an SVG Icon Component
    return typeof routeData.iconComponent === "string" ? (
      <img src={routeData.iconComponent} width={iconWidth} alt={routeData.title} />
    ) : (
      <routeData.iconComponent sx={{ fontSize: `${iconWidth}px` }} />
    );
  }

  const routeData: RouteData[] = [
    {
      url: "/creatures",
      title: "Creatures",
      iconComponent: CreaturesPng,
    },
    {
      url: "/traits",
      title: "Traits",
      iconComponent: TraitsPng,
    },
    {
      url: "/spells",
      title: "Spells",
      iconComponent: SpellsPng,
    },
    {
      url: "/status-effects",
      title: "Status Effects",
      iconComponent: StatusEffectsPng,
    },
    {
      url: "https://github.com/rovermicrover/siralim-ultimate-ui",
      title: "Source Code",
      iconComponent: isDarkTheme ? GitDarkSvg : GitLightSvg,
    },
    {
      url: "https://github.com/rovermicrover/",
      title: "Author",
      iconComponent: AuthorJpg,
    },
    {
      url: "https://store.steampowered.com/app/1289810/Siralim_Ultimate/",
      title: "SU on Steam",
      iconComponent: SteamJpg,
    },
    {
      url: "https://docs.google.com/spreadsheets/d/1RYRvKTCLLJxXrZ_7OOjG8j98L_fjE5KNHtLG4wHn9Xw/edit#gid=0",
      title: "Source 1",
      iconComponent: SourceIcon,
    },
    {
      url: "https://docs.google.com/spreadsheets/d/1qvWwf1fNB5jN8bJ8dFGAVzC7scgDCoBO-hglwjTT4iY/edit#gid=0",
      title: "Source 2",
      iconComponent: SourceIcon,
    },
    {
      url: "https://docs.google.com/spreadsheets/d/1hlS4iNB6Uj-KVKzmFEygZkeTfX-U73B9R2lXdV3d5I8/edit#gid=0",
      title: "Source 3",
      iconComponent: SourceIcon,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <nav>
        <List
          sx={{
            whiteSpace: "nowrap",
            overflowX: "hidden",
          }}
        >
          {routeData.map((data) => {
            return (
              <li key={data.title}>
                <ListItem
                  button
                  key={data.title}
                  component={MuiRouterLink}
                  title={data.title}
                  to={data.url}
                >
                  <ListItemIcon aria-hidden="true">
                    <Tooltip
                      title={isNavOpen ? "" : data.title}
                      describeChild
                      arrow
                      placement="right"
                    >
                      {createIconLinkElement(data)}
                    </Tooltip>
                  </ListItemIcon>
                  {isNavOpen && (
                    <ListItemText primary={data.title} sx={itemTextStyle} />
                  )}
                </ListItem>
              </li>
            );
          })}

          <ListItem sx={{ padding: "0px" }}>
            {
              <FormControlLabel
                sx={{ paddingLeft: "11px" }}
                control={
                  <Switch
                    sx={{ marginRight: "14px" }}
                    inputProps={{ role: "switch" }}
                    size={isMd ? "medium" : "small"}
                    checked={isDarkTheme}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setIsDarkTheme(event.target.checked)
                    }
                  />
                }
                label="Dark Theme"
              />
            }
          </ListItem>
        </List>
      </nav>
    </Drawer>
  );
}
