import React, { useEffect, useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref,  get } from "firebase/database";

function WinesList() {
    let [wines, setWines] = useState([]);

    const readData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "wines");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setWines(Object.values(snapshot.val()));
        }
    }

   
    useEffect(() => {
        readData().catch(e => console.log('reading error', e));
    }, []);

    return (
        <div>
            <h1>Massimo's selection:</h1>
            <ul>
                {wines.map((item, index) => {
                    console.log(item);
                    return (<li key={index}>Wine {item.wineName}: {item.wineDescription}</li>);
                })}
            </ul>
        </div>
    );
}

export default WinesList;