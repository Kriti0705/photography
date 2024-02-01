import { useState } from "react";
import Layout from "../../layout";

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([]);

    const handleChange = (e) => {
        let val = e.target.value;
        if (e.target.checked) {
            setHobbies([...hobbies, e.target.value]);
        } else {
            let newHob = hobbies.filter((value) => {
                return value == !val;
            });
            setHobbies(newHob);
        }
        console.log(hobbies);
    }
    return (
        <Layout>
            <div>
                <label>Hobbies</label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbies[]"
                        value={"read"}
                        onChange={handleChange}
                    />
                    Reading
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbies[]"
                        value={"Write"}
                        onChange={handleChange}
                    />
                    writing
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbies[]"
                        value={"sing"}
                        onChange={handleChange}
                    />
                    Singing
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbies[]"
                        value={"dance"}
                        onChange={handleChange}
                    />
                    Dancing
                </label>
            </div>
        </Layout>
    )
}

export default Hobbies;