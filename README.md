# CareerX - Artificial Intelligence based Career Guidance

<p align="center">
  <img src="https://github.com/rsashank/CareerX/assets/110327345/01f208a3-fc48-4b1e-8193-5539f39cdb64" alt="careerxdark">
  <br>
</p>

<div style="text-align: center;">
  <h3 style="display: inline-block; background-color: lightgrey;">Prototype made for Smart India Hackathon '2023 by Team CareerX</h3>
</div>


Problem Statement Code: 1434 <br>
Problem Statement Title: Making career choices and AI based counselling accessible to every child at secondary level along with aptitude tests and detailed career paths.

This prototype leverages the K-Nearest Neighbors Algorithm and has been initially trained on a limited dataset. To make predictions, we've created a FastAPI endpoint that interfaces with the model stored in the `careermodel.pkl` file. This model was saved during the training process in the `career-knn.ipynb` notebook.

We utilize the FastAPI endpoint by sending requests through our NextJS Webapp, allowing us to make predictions and display the results on our website. For quick and immediate testing, we've also developed a Streamlit web application, which is hosted on the Streamlit Cloud.

You can access the Streamlit web app for testing at the following URL: https://careerx-sih.streamlit.app/
