import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function WinesManagement() {
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");


    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "wines"));
        set(newDocRef, {
            wineName: name,
            wineDescription: description,
        }).then(() => {
            alert("good saved")
        }).catch((error) => {
            alert("error:", error.message);
        })
    };

    return (
        <div>
            <h1>Add Wine:</h1>
            <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={saveData}>Add Wine</button>
        </div>
    );
}

export default WinesManagement;