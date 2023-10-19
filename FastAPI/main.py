from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load('../careermodel.pkl')

class InputData(BaseModel):
    LRscore: int
    personality_Introverted: bool
    thinking_Thinker:bool
    perception_Perceiver: bool	
    thought_Sensing: bool

@app.post("/predict")
def predict(data: InputData):
    input_data = [[
        data.LRscore,
        int(data.personality_Introverted),
        int(data.thinking_Thinker),
        int(data.perception_Perceiver),
        int(data.thought_Sensing)        
    ]]

    predictions = model.predict(input_data)

    return {"predictions": predictions.tolist()}

'''
{
    "LRscore": 50,
    "personality_Introverted": true,
    "thinking_Thinker": true,
    "perception_Perceiver": false,
    "thought_Sensing": false
}
'''