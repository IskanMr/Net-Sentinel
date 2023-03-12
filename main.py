from typing import List
import pickle
from fastapi import FastAPI
from pydantic import BaseModel

# Define the input payload as a Pydantic BaseModel
class TrafficLog(BaseModel):
    duration: float
    protocol_type: str
    service: str
    flag: str
    src_bytes: int
    dst_bytes: int
    land: int
    wrong_fragment: int
    urgent: int
    hot: int
    num_failed_logins: int
    logged_in: int
    num_compromised: int
    root_shell: int
    su_attempted: int
    num_root: int
    num_file_creations: int
    num_shells: int
    num_access_files: int
    num_outbound_cmds: int
    is_host_login: int
    is_guest_login: int
    count: int
    srv_count: int
    serror_rate: float
    srv_serror_rate: float
    rerror_rate: float
    srv_rerror_rate: float
    same_srv_rate: float
    diff_srv_rate: float
    srv_diff_host_rate: float
    dst_host_count: int
    dst_host_srv_count: int
    dst_host_same_srv_rate: float
    dst_host_diff_srv_rate: float
    dst_host_same_src_port_rate: float
    dst_host_srv_diff_host_rate: float
    dst_host_serror_rate: float
    dst_host_srv_serror_rate: float
    dst_host_rerror_rate: float
    dst_host_srv_rerror_rate: float

# Load the trained model
with open('traffic_classification_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Define the FastAPI instance
app = FastAPI()

# Define the API endpoint for the prediction
@app.post("/predict")
def predict_traffic(logs: List[TrafficLog]):
    # Convert the input payload to a Pandas DataFrame
    input_data = [log.dict() for log in logs]
    input_df = pd.DataFrame(input_data)
    input_df = pd.get_dummies(input_df)

    # Make a prediction using the loaded model
    predictions = model.predict(input_df)

    # Return the predictions as a JSON object
    return {"predictions": list(predictions)}
