<p align="center"><img src="/images/logo.jpg" height="120" /></p>
<h1>CLIENT</h1>
<p><em>This document provides general information on the Polica code app and details on the api.  For more information about the Police code client, please see <a href="https://github.com/giri68/spacedRepetition-server/edit/master/README.md">Police code back end</a>.</em></p>


Why Police code
---------------
Spaced repetition is a learning technique that incorporates increasing intervals of time between subsequent review of previously learned material. Police code app is using algorithm following the space repetition approach. It will be a great tools to learn about police code for professionals and hubbyist.

How it Works
------------
<table layout="fixed">
  <tr>
    <td width="55%">
      <p>Police code's main screen displays police 10-code.  It is provided with question.</p>
    </td>
    <td width = "40%">
      <img src="/images/question.png" max-height="240px" width="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>When a user logs in, he provides with police code and he can provide his answer in input box. .</p>
    </td>
    <td>
      <img src="/images/answer.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>If the answer is right, it shows correct in green background. But if it is wrong, it shows incorrect in red background and provides correct answer.</p>
    </td>
    <td>
      <img src="/images/answerresponse.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>The app also tracks user's over all history progress and particular session's progress.</p>
    </td>
    <td>
      <img src="/images/feedback.png" max-height="240px" witdh="auto">
    </td>
  </tr>
</table>

Where to find Police code
------

|          **desc**        |                   **location**                                          |
|--------------------------|-------------------------------------------------------------------------|
|live client               |   http://lucid-davinci-0607dd.netlify.com/                              |
|client code               |   https://github.com/brianjb-lfl/spacedRepetition-client                |
|deployed api              |   https://space-repetetion.herokuapp.com/                               |
|api code                  |   https://github.com/giri68/spacedRepetition-server                     |                     | 


Local Client Use
------
1.  clone this repository<br>
``` git clone https://github.com/brianjb-lfl/spacedRepetition-client.git```<br>

2.  move to the repository's local directory<br>
``` cd spacedRepetition-client```<br>

3.  install dependencies<br>
``` npm install```<br>

note: use of this client requires a connection to an instance of the police code api<br>

4.  by default the client will attempt to connect to the api's default url:<br>
``` http://localhost:8080```<br>

5.  if using the api on a different url, create a .env file in the client root with the following setting:<br>
``` REACT_APP_API_URL= {insert api url here, w/o the brackets} ```<br>

6.  start the client<br>
``` npm start```<br>

Technology Used
------
* javascript
* html
* css
* react
* react-redux
* react-dom
* enzyme
* redux-thunk
