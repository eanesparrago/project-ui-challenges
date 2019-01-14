import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import TextFit from "react-textfit";

import coverImage from "./images/artist-rush-cover.jpg";
import album1Image from "./images/artist-rush-album-1.jpg";
import album2Image from "./images/artist-rush-album-2.jpg";
import album3Image from "./images/artist-rush-album-3.jpg";
import album4Image from "./images/artist-rush-album-4.jpg";
import album5Image from "./images/artist-rush-album-5.jpg";
import album6Image from "./images/artist-rush-album-6.jpg";
import album7Image from "./images/artist-rush-album-7.jpg";
import album8Image from "./images/artist-rush-album-8.jpg";
import album9Image from "./images/artist-rush-album-9.jpg";
import album10Image from "./images/artist-rush-album-10.jpg";
import album11Image from "./images/artist-rush-album-11.jpg";
import album12Image from "./images/artist-rush-album-12.jpg";
import albumMovingImage from "./images/artist-rush-album-moving.jpg";

import IconAdd from "./svgs/IconAdd";
import IconAddNew from "./svgs/IconAddNew";
import IconMoreNew from "./svgs/IconMoreNew";
import IconPlay from "./svgs/IconPlay";
import IconPlayNew from "./svgs/IconPlayNew";
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
    xxs: "0.25em",
    xs: "0.5em",
    sm: "1em",
    md: "2em",
    lg: "4em",
    xl: "6em"
  },
  size: {
    unit: "1em",
    xs: "0.5em",
    sm: "1em",
    md: "2em",
    lg: "4em",
    xl: "6em"
  }
};

const sidebarWidth = 12;

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
  grid-template-rows: auto 1fr;

  .sidebar-wrapper {
    /* border: 1px solid cyan; */
    width: calc(${theme.size.unit} * ${sidebarWidth});
    height: 100vh;
    grid-row: 1 / -1;
  }

  .sidebar-block {
    /* border: 1px solid cyan; */
    position: fixed;
    width: calc(${theme.size.unit} * ${sidebarWidth});
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
    height: 50vh;
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
      align-items: flex-start;

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
    border-right: 1px solid ${theme.color.black};
    padding: ${theme.space.md};

    .songs-header-box {
      margin-bottom: ${theme.space.sm};

      .top-songs {
        font-size: 1.125em;
        font-weight: 700;
        margin-right: ${theme.space.sm};
      }

      .all-songs {
      }
    }
  }

  .songs-content-container {
    .song-box {
      /* border: 1px solid magenta; */
      display: flex;
      align-items: stretch;
      margin-bottom: ${theme.space.xs};

      .song-number-box {
        /* border: 1px solid magenta; */
        min-width: ${theme.size.md};
        height: ${theme.size.md};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: ${theme.space.xs};

        .song-number {
        }
      }

      .song-add-box {
        /* border: 1px solid magenta; */
        display: flex;
        justify-content: center;
        margin-right: ${theme.space.xs};

        .song-add {
        }
      }

      .song-album-box {
        width: ${theme.size.md};
        height: ${theme.size.md};
        margin-right: ${theme.space.xs};

        .song-album {
           /* width: 100%; */
          height: 100%;
          object-fit: contain; 
        }
      }

      .song-title-box {
        /* border: 1px solid magenta; */
        width: 100%;
        display: flex;
        align-items: center;
        margin-right: ${theme.space.xs};

        .song-title {
        }
      }

      .song-duration-box {
        /* border: 1px solid magenta; */
        width: calc(${theme.size.unit} * 6);
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }

  .albums-block {
    padding: ${theme.space.md};

    .albums-header-box {
      margin-bottom: ${theme.space.sm};

      .albums-text {
        font-size: 1.125em;
        font-weight: 700;
      }
    }

    .albums-container {
      /* border: 1px solid magenta; */
      /* display: grid;
      grid-auto-flow: column;
      grid-auto-columns: auto; */
      /* grid-gap: ${theme.space.sm}; */

      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .album-box {
        /* border: 1px solid magenta; */
        width: ${theme.size.xl};
        height: ${theme.size.xl};

        :not(:last-child) {
          margin-right: ${theme.space.sm};
          margin-bottom: ${theme.space.sm};
        }

        .album-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center;
        }
      }
    }   
  }

  .player-wrapper {
    position: relative;
  }

  .player-block {
    /* border: 1px solid magenta; */
    /* display: none; */
    position: fixed;
    width: calc(${theme.size.unit} * 58);
    height: calc(${theme.size.unit} * 5);
    left: calc(${theme.size.unit} * ${sidebarWidth});
    margin-left: ${theme.size.md};
    bottom: ${theme.space.md};
    background-color: ${theme.color.black};
    border-radius: 1000em;
    padding: ${theme.space.sm} ${theme.space.md};
    display: flex;
  }

  .player-controls-container {
    /* border: 1px solid magenta; */
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: ${theme.space.md};

    > :not(:last-child){
      margin-right: ${theme.space.sm};
    }

    .player-previous-box {
      /* border: 1px solid magenta; */
      width: ${theme.size.md};
      height: ${theme.size.md};
      display: flex;
      justify-content: center;
      align-items: center;

      .player-previous {
        width: ${theme.size.md};
        height: ${theme.size.md};
        color: ${theme.color.white};
      }
    }

    .player-play-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.size.unit} * 3);
      height: calc(${theme.size.unit} * 3);
      display: flex;
      justify-content: center;
      align-items: center;
      
      .player-play {
        width: calc(${theme.size.unit} * 3);
        height: calc(${theme.size.unit} * 3);
        color: ${theme.color.white};
      }
    }

    .player-next-box {
      /* border: 1px solid magenta; */
      width: ${theme.size.md};
      height: ${theme.size.md};
      display: flex;
      justify-content: center;
      align-items: center;
      
      .player-next{
        width: ${theme.size.md};
        height: ${theme.size.md};
        color: ${theme.color.white};
      }
    }
  }

  .player-content-container {
    /* border: 1px solid magenta; */
    width: 100%;
    height: calc(${theme.size.unit} * 3);
    display: flex;

    .player-album-box {
      /* border: 1px solid magenta; */
      width: calc(${theme.size.unit} * 3);
      height: calc(${theme.size.unit} * 3);
      margin-right: ${theme.size.sm};

      .player-album {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }

    .player-info-container {
      display: grid;
      width: 100%;
      align-items: end;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr auto auto;
      margin-right: ${theme.space.xs};

      .player-title-box {
        padding-bottom: ${theme.space.xxs};

        .player-title {
          font-size: 1.125em;
          color: ${theme.color.white};
          font-weight: 700;
        }
      }

      .player-artist-box{
        padding-bottom: ${theme.space.xxs};

        .player-artist {
          color: ${theme.color.white};
        }
      }

      .player-content-controls-container {
        /* border: 1px solid magenta; */
        display: flex;
        
        .player-shuffle-box { 
          /* border: 1px solid magenta; */
          width: ${theme.size.md};
          height: ${theme.size.md};

          .player-shuffle {
            /* border: 1px solid magenta; */
            width: ${theme.size.md};
            height: ${theme.size.md};
            color: ${theme.color.white};
          }
        }

        .player-repeat-box {
          width: ${theme.size.md};
          height: ${theme.size.md};

          .player-repeat {
            width: ${theme.size.md};
            height: ${theme.size.md};
            color: ${theme.color.white};

          }
        }
      }

      .player-duration-box {
        justify-self: end;
        margin-left: ${theme.space.md};
        padding-bottom: ${theme.space.xxs};


        .player-duration {
          color: ${theme.color.white};
        }
      }

      .player-trackbar-box {
        /* border: 1px solid magenta; */
        grid-column: 1 / -1;
        height: ${theme.size.sm};
        display: flex;
        align-items: center;
        
        .player-trackbar {
          height: 2px;
          width: 100%;
          background-color: ${theme.color.white};

        }
      }

    }
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
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={albumMovingImage} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">YYZ</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">4:26</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">2</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={albumMovingImage} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">Red Barchetta</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">4:56</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">3</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={album12Image} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">Subdivisions</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">5:35</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">4</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={album9Image} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">Time Stand Still</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">5:09</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">5</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={albumMovingImage} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">Limelight</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">4:20</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">6</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={album12Image} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">New World Man</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">3:43</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">7</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={albumMovingImage} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">Vital Signs</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">4:46</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">8</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={album10Image} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">The Big Money</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">5:34</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">9</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={album11Image} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">Red Sector A</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">5:09</span>
                </div>
              </div>

              <div className="song-box">
                <div className="song-number-box">
                  <span className="song-number">10</span>
                </div>
                <button className="song-add-box">
                  <IconAdd className="song-add" />
                </button>
                <button className="song-album-box">
                  <img className="song-album" src={album12Image} alt="" />
                </button>
                <button className="song-title-box">
                  <span className="song-title">The Analog Kid</span>
                </button>
                <div className="song-duration-box">
                  <span className="song-duration">4:48</span>
                </div>
              </div>
            </div>
          </section>

          <section className="albums-block">
            <div className="albums-header-box">
              <span className="albums-text">Albums</span>
            </div>

            <div className="albums-container">
              <button className="album-box">
                <img src={album1Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album2Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album3Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album4Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album5Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album6Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album7Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album8Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album9Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album10Image} alt="" className="album-image" />
              </button>
              <button className="album-box">
                <img src={album12Image} alt="" className="album-image" />
              </button>
            </div>
          </section>

          <div className="player-wrapper">
            <div className="player-block">
              <div className="player-controls-container">
                <button className="player-previous-box">
                  <IconSkipPrevious className="player-previous" />
                </button>
                <button className="player-play-box">
                  <IconPlay className="player-play" />
                </button>
                <button className="player-next-box">
                  <IconSkipNext className="player-next" />
                </button>
              </div>

              <div className="player-content-container">
                <div className="player-album-box">
                  <img src={album1Image} alt="" className="player-album" />
                </div>

                <div className="player-info-container">
                  <div className="player-title-box">
                    <span className="player-title">Caravan</span>
                  </div>

                  <div className="player-artist-box">
                    <span className="player-artist">Rush</span>
                  </div>

                  <div className="player-content-controls-container">
                    <button className="player-shuffle-box">
                      <IconShuffle className="player-shuffle" />
                    </button>
                    <button className="player-repeat-box">
                      <IconRepeat className="player-repeat" />
                    </button>
                  </div>

                  <div className="player-duration-box">
                    <span className="player-duration">0:00 / 5:39</span>
                  </div>

                  <div className="player-trackbar-box">
                    <div className="player-trackbar" />
                  </div>
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
