import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar0 from "../images/avatar-0.jpg";
import avatar1 from "../images/avatar-2-corey.jpg";
import avatar2 from "../images/avatar-1-dina.jpg";
import avatar3 from "../images/avatar-3-mackenzie.jpg";
import avatar4 from "../images/avatar-4-sonequa.jpg";
import avatar5 from "../images/avatar-5-adam.jpg";
import avatar6 from "../images/avatar-6-christina.jpg";

const StyledHome = styled.div`
  /* width: 320px;
  height: 568px; */
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  position: relative;

  width: 100%;
  height: 100%;
`;

export class Home extends Component {
  render() {
    return (
      <StyledHome>
        <header className="header">
          <div className="avatar avatar--small">
            <div className="avatar__img-box">
              <img src={avatar0} alt="Profile avatar" className="avatar__img" />
            </div>

            <div className="avatar__status" />
          </div>

          <span className="header__title">dusk</span>

          <div className="header__secondary-button">
            <div className="button">
              <svg
                className="button__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </header>

        <main className="main">
          <Link to="/013/chat">
            <div className="chat-container">
              <div className="chat-container__avatar-box">
                <div className="avatar">
                  <div className="avatar__img-box">
                    <img
                      src={avatar1}
                      alt="Profile avatar"
                      className="avatar__img"
                    />
                  </div>

                  <div className="avatar__status" />
                </div>
              </div>

              <div className="chat-container__name">Corey Haim</div>
              <div className="chat-container__time">Now</div>
              <div className="chat-container__message">You: Nothing</div>
            </div>
          </Link>

          <div className="chat-container">
            <div className="chat-container__status" />

            <div className="chat-container__avatar-box">
              <div className="avatar">
                <div className="avatar__img-box">
                  <img
                    src={avatar2}
                    alt="Profile avatar"
                    className="avatar__img"
                  />
                </div>

                <div className="avatar__status" />
              </div>
            </div>
            <div className="chat-container__name">Dina Meyer</div>
            <div className="chat-container__time">7:15 PM</div>
            <div className="chat-container__message chat-container__message--new">
              Thanks.
            </div>
          </div>

          <div className="chat-container">
            <div className="chat-container__status" />

            <div className="chat-container__avatar-box">
              <div className="avatar">
                <div className="avatar__img-box">
                  <img
                    src={avatar3}
                    alt="Profile avatar"
                    className="avatar__img"
                  />
                </div>

                <div className="avatar__status" />
              </div>
            </div>
            <div className="chat-container__name">Mackenzie Foy</div>
            <div className="chat-container__time">5:49 PM</div>
            <div className="chat-container__message chat-container__message--new">
              What are you up to? I just got home from set.
            </div>
          </div>

          <div className="chat-container">
            <div className="chat-container__avatar-box">
              <div className="avatar">
                <div className="avatar__img-box">
                  <img
                    src={avatar4}
                    alt="Profile avatar"
                    className="avatar__img"
                  />
                </div>

                <div className="avatar__status" />
              </div>
            </div>
            <div className="chat-container__name">Sonequa Martin-Green</div>
            <div className="chat-container__time">Jan 28</div>
            <div className="chat-container__message">
              Sonequa sent you a photo.
            </div>
          </div>

          <div className="chat-container">
            <div className="chat-container__status" />

            <div className="chat-container__avatar-box">
              <div className="avatar">
                <div className="avatar__img-box">
                  <img
                    src={avatar5}
                    alt="Profile avatar"
                    className="avatar__img"
                  />
                </div>

                <div className="avatar__status" />
              </div>
            </div>
            <div className="chat-container__name">Adam Driver</div>
            <div className="chat-container__time">Jan 26</div>
            <div className="chat-container__message chat-container__message--new">
              Thank you for informing me! I'll keep it in mind for next time.
            </div>
          </div>

          <div className="chat-container">
            <div className="chat-container__avatar-box">
              <div className="avatar">
                <div className="avatar__img-box">
                  <img
                    src={avatar6}
                    alt="Profile avatar"
                    className="avatar__img"
                  />
                </div>

                <div className="avatar__status" />
              </div>
            </div>
            <div className="chat-container__name">Christina Hendricks</div>
            <div className="chat-container__time">Jan 26</div>
            <div className="chat-container__message">What the duck</div>
          </div>
        </main>

        <nav className="bottom-nav">
          <div className="nav-button nav-button--active">
            <div className="nav-button__icon-box">
              <svg
                className="nav-button__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>

            <span className="nav-button__counter">3</span>
          </div>

          <div className="nav-button">
            <div className="nav-button__icon-box">
              <svg
                className="nav-button__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>

            <span className="nav-button__counter">5</span>
          </div>

          <div className="nav-button">
            <div className="nav-button__icon-box">
              <svg
                className="nav-button__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </nav>
      </StyledHome>
    );
  }
}

export default Home;
