import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar1 from "../images/avatar-2-corey.jpg";
import imageEmoji from "../images/emoji.png";

const StyledChat = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  position: relative;
`;

export class Chat extends Component {
  render() {
    return (
      <StyledChat>
        <header className="header">
          <Link to="/013">
            <div className="button">
              <svg
                className="button__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </div>
          </Link>

          <div className="header__title-box">
            <span className="header__title header__title--chat">Corey</span>
            <div className="header__status" />
          </div>

          <div className="header__secondary-button">
            <div className="button">
              <svg
                className="button__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
          </div>
        </header>

        <main className="main">
          <div className="message-box">
            <div className="avatar avatar--small">
              <div className="avatar__img-box">
                <img
                  className="avatar__img"
                  src={avatar1}
                  alt="Profile avatar"
                />
              </div>
            </div>

            <div className="message-text">
              <span className="message-text__text">
                What are you up to? I just got home from set.
              </span>
            </div>
          </div>

          <div className="message-box message-box--self">
            <div className="message-text">
              <span className="message-text__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent et nisl at arcu dapibus sollicitudin laoreet.
              </span>
            </div>
          </div>

          <div className="message-box message-box--self message-box--last">
            <div className="message-text">
              <span className="message-text__text">
                Morbi laoreet dolor ante, vestibulum volutpat diam dapibus sit
                amet.
              </span>
            </div>
          </div>

          <div className="message-box">
            <div className="avatar avatar--small">
              <div className="avatar__img-box">
                <img
                  className="avatar__img"
                  src={avatar1}
                  alt="Profile avatar"
                />
              </div>
            </div>

            <div className="message-text">
              <span className="message-text__text">Weirdo</span>
            </div>
          </div>

          <div className="message-box message-box--self message-box--last">
            <div className="message-text message-text--emoji">
              <span className="message-text__text">
                <img className="emoji" src={imageEmoji} alt="" />
              </span>
            </div>
          </div>

          <div className="message-box">
            <span className="message-text message-text--update">
              Corey is writing...
            </span>
          </div>
        </main>

        <nav className="bottom-nav-2">
          <div className="nav-button">
            <svg
              className="nav-button__svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H23v16H3V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
            </svg>
          </div>

          <div className="nav-item">
            <span>Write your message...</span>
          </div>

          <div className="nav-button">
            <svg
              className="nav-button__svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
        </nav>
      </StyledChat>
    );
  }
}

export default Chat;
