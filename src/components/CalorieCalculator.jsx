import { createSignal } from "solid-js";
import "./CalorieCalculator.css";

export default function CalorieCalculator(){
    const [gender, setGender] = createSignal("Male");

    return (
        <section>
            <h1>Calorie Calculator</h1>
            <div>
                <label for="gender">Gender</label>
                <select name="gender" id="gender">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <div>
                <label for="gender">Height</label>
                <input type="number" name="height" id="height" />
            </div>
        </section>
    );
}