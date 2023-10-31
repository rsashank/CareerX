import streamlit as st
import joblib

model = joblib.load('careermodel.pkl')

careerCategories = {
    0: "Architecture",
    1: "Arts",
    2: "Business",
    3: "Communications",
    4: "Education",
    5: "Engineering",
    6: "Government",
    7: "Healthcare",
    8: "Law",
    9: "Sales",
}

def make_prediction(lr_score, personality_Introverted, thinking_Thinker, perception_Perceiver, thought_Sensing):
    input_data = [
        [lr_score, personality_Introverted, thinking_Thinker, perception_Perceiver, thought_Sensing]
    ]
    predictions = model.predict(input_data)
    return predictions[0]

def main():
    
    st.title("CareerX - Artificial Intelligence based Career Counselling")

    personality_Introverted = st.radio("Personality Type (Introverted/Extroverted)", ("Introverted", "Extroverted"))
    thinking_Thinker = st.radio("Thinking Style (Thinker/Feeler)", ("Thinker", "Feeler"))
    perception_Perceiver = st.radio("Perception Style (Perceiver/Judger)", ("Perceiver", "Judger"))
    thought_Sensing = st.radio("Thought Process (Intuition/Sensing)", ("Intuition", "Sensing"))
    lr_score = st.number_input("LR Score (1-100)", min_value=1, max_value=100)

    if st.button("Submit"):
        personality_Introverted = (personality_Introverted == "Introverted")
        thinking_Thinker = (thinking_Thinker == "Thinker")
        perception_Perceiver = (perception_Perceiver == "Perceiver")
        thought_Sensing = (thought_Sensing == "Sensing")

        prediction = make_prediction(lr_score, personality_Introverted, thinking_Thinker, perception_Perceiver, thought_Sensing)

        career_category = careerCategories.get(prediction, "Unknown")

        st.subheader("KNN Model Prediction")
        
        tabs = st.tabs(["Prediction", "Input Data"])

        with tabs[0]:
            st.markdown(
                f"""<div style="text-align:center; font-size: 24px;">
                    <strong>The crystal ball has spoken!<strong> 🔮 \n\n
                """,
                unsafe_allow_html=True
            )
            st.markdown(
                f"""<div style="text-align:center; font-size: 24px;">
                    <strong>{career_category}<strong>
                </div>""",
                unsafe_allow_html=True
            )

        with tabs[1]:
            st.subheader("Input Data")
            st.write(f"LR Score: {lr_score}")
            st.write(f"Personality Type: {'Introverted' if personality_Introverted else 'Extroverted'}")
            st.write(f"Thinking Style: {'Thinker' if thinking_Thinker else 'Feeler'}")
            st.write(f"Perception Style: {'Perceiver' if perception_Perceiver else 'Judger'}")
            st.write(f"Thought Process: {'Intuition' if thought_Sensing else 'Sensing'}")

    st.markdown(
        """
        <div style="text-align:center; margin-top: 50px;">
            <span style="font-size: 18px;">Made with ❤️ by <strong>Team CareerX @ SIH 2023</strong></span> <br>
        </div>
        """,
        unsafe_allow_html=True
    )

if __name__ == '__main__':
    main()
