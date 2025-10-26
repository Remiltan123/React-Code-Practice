import { useState, type FormEvent } from "react"

type formType = {
    Name: string,
    message: string
    age: number,
    favPlayer: string,
    agree: boolean
}
export const Form = () => {

    const [formData, setFormData] = useState<formType>({
        Name: '',
        message: '',
        age: 0,
        favPlayer: "messi",
        agree: false
    });

    const handleChnage = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        //setFormData({ ...formData, [name]: value });

        // setFormData((prev) => {
        //     return {
        //         ...prev,
        //         [name]: value
        //     }
        // })

        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData(formData)
        console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <span>Name</span>
                    <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChnage} />
                </label>

                <label >
                    <span >Message</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChnage}
                        placeholder="Write something..."
                        rows={3}
                    />
                </label>

                <label htmlFor="">
                    <span>Name</span>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChnage} />
                </label>

                <label>
                    <span >Favorite Fruit</span>
                    <select name="favPlayer" value={formData.favPlayer} onChange={handleChnage}>
                        <option value="Messi">Messi</option>
                        <option value="Ronaldo">Ronaldo</option>
                        <option value="JR">JR</option>
                    </select>
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={(e) => setFormData((prev) => ({ ...prev, agree: e.target.checked }))}
                    />
                    <span >I agree to the terms</span>
                </label>

                <button type="submit">OnSubmit</button>

            </form>

            {
                formData.Name.trim() !== '' ? (
                    <>
                        <div>{formData.Name}</div>
                        <div>{formData.age}</div>
                        <div>{formData.message}</div>
                        <div>{formData.favPlayer}</div>
                        <div>Agreed: {formData.agree ? "Yes" : "No"}</div>
                    </>
                ) : null
            }
        </>
    )

}