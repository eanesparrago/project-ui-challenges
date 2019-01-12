import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import TextFit from "react-textfit";

import coverImage from "./images/artist-rush-cover.jpg";

import IconAdd from "./svgs/IconAdd";
import IconAddNew from "./svgs/IconAddNew";
import IconAddCircle from "./svgs/IconAddCircle";
import IconMore from "./svgs/IconMore";
import IconMoreNew from "./svgs/IconMoreNew";
import IconPlay from "./svgs/IconPlay";
import IconPlayNew from "./svgs/IconPlayNew";
import IconPlayCircle from "./svgs/IconPlayCircle";
import IconRepeat from "./svgs/IconRepeat";
import IconSearch from "./svgs/IconSearch";
import IconShuffle from "./svgs/IconShuffle";
import IconSkipNext from "./svgs/IconSkipNext";
import IconSkipPrevious from "./svgs/IconSkipPrevious";

const theme = {
  font: {
    primary: "Muli, sans-serif"
  },
  color: {
    black: "#000000",
    white: "#FFFFFF"
  },
  space: {
    unit: "1em",
    xs: "0.5em",
    sm: "1em",
    md: "2em",
    lg: "4em"
  },
  size: {
    unit: "1em",
    xs: "0.5em",
    sm: "1em",
    md: "2em",
    lg: "4em"
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    width: 100%;
  }

  body {
    font-family: ${theme.font.primary};
    font-size: 1em;
    font-weight: 400;
    margin: 0;
  }

  button {
    background-color: unset;
    border: none;
    text-align: left;
    padding: 0;
    margin: 0;
    cursor: pointer;

    :focus {
      outline: 0;
    }
  }
`;

const StyledGranite = styled.div`
  /* border: 1px solid magenta; */
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .sidebar-wrapper {
    /* border: 1px solid cyan; */
    width: calc(${theme.size.unit} * 12);
    height: 100vh;
    grid-row: 1 / -1;
  }

  .sidebar-block {
    /* border: 1px solid cyan; */
    position: fixed;
    width: calc(${theme.size.unit} * 12);
    min-height: 100vh;
    padding: ${theme.space.md};
    border-right: 1px solid ${theme.color.black};

    display: grid;
    grid-template-rows: auto auto auto 1fr;
  }

  .sidebar-container {
    /* border: 1px solid cyan; */

    :not(:last-child) {
      margin-bottom: ${theme.space.md};
    }

    .sidebar-item-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.size.unit} * 8);
      height: ${theme.space.md};
      display: flex;
      align-items: flex-end;

      .sidebar-heading {
        font-size: 1.125em;
        font-weight: 700;
      }

      .sidebar-text {
      }

      &--button {
        cursor: pointer;

        &:hover {
        }
      }
    }

    &--end {
      /* border: 1px solid orange; */
      align-self: end;
    }
  }

  .logo {
    font-size: 1.125em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .artist-header-block {
    /* border: 1px solid magenta; */
    padding: ${theme.space.md};
    position: relative;
    grid-column: 2 / -1;

    .artist-header-cover-image-box {
      /* border: 1px solid magenta; */
      ::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0) 80%
        );
        background-blend-mode: multiply;
        z-index: -1;
      }
    }

    .artist-header-cover-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: -2;
    }

    .search-box {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: ${theme.space.md};

      .search-input {
        width: calc(${theme.size.unit} * 14);
        height: ${theme.size.md};
        border: 1px solid ${theme.color.white};
        border-radius: 1000em;
        background-color: unset;
        color: ${theme.color.white};
        padding-left: ${theme.space.md};
      }

      .search-icon {
        /* border: 1px solid magenta; */
        position: absolute;
        margin-left: ${theme.space.xs};
        z-index: 10;

        /* left: 0; */
        color: ${theme.color.white};
      }
    }
    .artist-name-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.size.unit} * 30);
      height: calc(${theme.size.unit} * 6);

      display: flex;
      align-items: flex-end;

      .artist-name {
        /* border: 1px solid magenta; */
        /* background-color: magenta; */
        width: 100%;
        color: ${theme.color.white};
        font-weight: 700;
      }
    }

    .artist-genre-container {
      /* border: 1px solid magenta; */
      display: flex;
      margin-bottom: ${theme.space.md};

      .artist-genre {
        width: calc(${theme.size.unit} * 9);
        height: calc(${theme.size.unit} * 1.5);
        border: 1px solid ${theme.color.white};
        border-radius: 1000em;
        display: flex;
        justify-content: center;
        align-items: center;

        :not(:last-child) {
          margin-right: ${theme.space.sm};
        }
      }

      .artist-genre-text {
        font-size: 0.875em;
        color: ${theme.color.white};
      }
    }

    .artist-buttons-container {
      display: flex;

      > :not(:last-child) {
        margin-right: ${theme.space.md};
      }

      .artist-button-play-box,
      .artist-button-add-box {
        /* border: 1px solid magenta; */
        width: ${theme.size.lg};
        height: ${theme.size.lg};
        color: ${theme.color.white};
      }

      .artist-button-play,
      .artist-button-add {
        width: 100%;
        height: 100%;
      }

      .artist-button-more-box {
        width: ${theme.size.lg};
        color: ${theme.color.white};
      }
    }
  }

  .songs-block {
  }
  
  .player-block {
    display: none;
  }
`;

export class Granite extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledGranite>
          <GlobalStyle />

          <div className="sidebar-wrapper">
            <nav className="sidebar-block">
              <div className="sidebar-container">
                <div className="sidebar-item-box">
                  <span className="logo">Granite</span>
                </div>
              </div>

              <div className="sidebar-container">
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-heading">My Music</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Recently Played</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Artists</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Albums</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Songs</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Playlists</span>
                </button>
              </div>

              <div className="sidebar-container">
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-heading">Explore</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Genres</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Charts</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">New Releases</span>
                </button>
              </div>

              <div className="sidebar-container sidebar-container--end">
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">My Account</span>
                </button>
                <button className="sidebar-item-box sidebar-item-box--button">
                  <span className="sidebar-text">Settings</span>
                </button>
              </div>
            </nav>
          </div>

          <section className="artist-header-block">
            <div className="artist-header-cover-image-box">
              <img
                className="artist-header-cover-image"
                src={coverImage}
                alt=""
              />
            </div>

            <div className="search-box">
              <input className="search-input" type="text" />
              <IconSearch className="search-icon" />
            </div>

            <div className="artist-name-box">
              {/* <span className="artist-name"> */}
              <TextFit className="artist-name" mode="single" max={96}>
                Rush
              </TextFit>
              {/* </span> */}
            </div>

            <div className="artist-genre-container">
              <button className="artist-genre">
                <span className="artist-genre-text">Progressive Rock</span>
              </button>
              <button className="artist-genre">
                <span className="artist-genre-text">Hard Rock</span>
              </button>
              <button className="artist-genre">
                <span className="artist-genre-text">Heavy Metal</span>
              </button>
            </div>

            <div className="artist-buttons-container">
              <button className="artist-button-play-box">
                <IconPlayNew className="artist-button-play" />
              </button>
              <button className="artist-button-add-box">
                <IconAddNew className="artist-button-add" />
              </button>
              <button className="artist-button-more-box">
                <IconMoreNew className="artist-button-more" />
              </button>
            </div>
          </section>

          <section className="songs-block">
            <div className="songs-header-box">
              <span className="top-songs">Top Songs</span>
              <button className="all-songs">All Songs</button>
            </div>

            <div className="songs-content-container">
              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">1</span>
                </div>
                <div className="song-add-box">{/* SVG */}</div>
                <div className="song-album-box">
                  <img src="" alt="" />
                </div>
                <div className="song-title-box">
                  <span className="song-title">Tom Sawyer</span>
                </div>
                <div className="song-duration-box">
                  <span className="song-duration">4:37</span>
                </div>
              </div>
            </div>
          </section>

          <section className="albums-block">
            <div className="album-header-box">
              <span className="albums-text">Albums</span>
            </div>

            <div className="albums-content-container">
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
              <div className="album-box">
                <img src="" alt="" className="album-image" />
              </div>
            </div>
          </section>

          <div className="player-block">
            <div className="player-controls-container">
              <div className="player-previous-box">{/* SVG */}</div>
              <div className="player-play-box">{/* SVG */}</div>
              <div className="player-next-box">{/* SVG */}</div>
            </div>

            <div className="player-content-container">
              <div className="player-album-box">
                <img src="" alt="" className="player-album" />
              </div>

              <div className="player-info-container">
                <div className="player-title-box">
                  <span className="player-title">Caravan</span>
                </div>

                <div className="player-artist-box">
                  <span className="player-artist">Rush</span>
                </div>

                <div className="player-content-controls-container">
                  <div className="player-shuffle-box">{/* SVG */}</div>
                  <div className="player-repeat-box">{/* SVG */}</div>
                </div>

                <div className="player-duration-box">
                  <span className="player-duration">0:00 / 5:40</span>
                </div>

                <div className="player-trackbar-box">
                  <div className="player-trackbar" />
                </div>
              </div>
            </div>
          </div>
        </StyledGranite>
      </ThemeProvider>
    );
  }
}

export default Granite;
