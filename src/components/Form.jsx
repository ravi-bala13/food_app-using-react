import {useState, useEffect} from "react";
import {nanoid} from "nanoid";

export const Form = () => {

    const [form_val, setForm_val] = useState([]);

    const [instruction, setInstruction] = useState("");
    console.log(instruction, "sdfsd")
    const [details, setDetails] = useState({
        title: "",
        ingredients: "",
        time_to_cook: "",
        img: "",
        instruction: ""
        
    });

    const changeHandler = e => {
        setDetails({...details, [e.target.name]: e.target.value})        
    }
    

    const submit = (e) => {
        e.preventDefault();
        
        addForm();
        setDetails({
            title: "",
            ingredients: "",
            time_to_cook: "",
            img: "",
            instruction: ""
        })
    }

    useEffect(() => {
        getForm()
    },[])

    const getForm = () => {
        fetch(`/receipys`)
        .then((d) => d.json()
        .then((res)=> {
            setForm_val(res);
            console.log("form_val",form_val)
        }))
    }

    

    // const sortBySalary = () => {
    //     form_val.sort((a,b) => a.salary - b.salary);
    //     console.log("sorte",form_val)
    //     setForm_val(form_val);
    //     // getForm();
    // }

    const addForm = () => {
        // e.preventDefault();
        const payload = {
            title: details.title,
            ingredients: details.ingredients,
            time_to_cook: details.time_to_cook,
            img: details.img,
            instruction: details.instruction
        }
        fetch("/receipys",{
            method: "POST",
            body: JSON.stringify(payload),
            headers:{
                "content-type": "application/json",
            }
        }).then(() => {
            getForm();
            // setText("");
        });
            
        
    }

    return <div className="content">
        
        <div className="form-div">
            <h2>Enter Receipy details</h2>
            <form method="POST" onSubmit={submit}>
            <table>
                <tbody>
                <tr>
                    <td>Title</td>
                    <td><input onChange={changeHandler} value={details.title} type="text" name="title" placeholder="Title" required/></td>
                </tr>
                <tr>
                    <td>Incredient</td>
                    <td><input onChange={changeHandler} value={details.ingredients} type="text" name="ingredients" placeholder="ingredients" required /></td>
                </tr>
                <tr>
                    <td>Time to cook</td>
                    <td><input onChange={changeHandler} value={details.time_to_cook} type="text" name="time_to_cook" placeholder="Time to cook" required /></td>
                </tr>
                
                <tr>
                    <td>Image</td>
                    <td><input onChange={changeHandler} value={details.img} type="text" name="img" placeholder="Image url" required /></td>
                </tr>
                
                <tr>
                    <td>Instruction</td>
                    <td><input onChange={(changeHandler)} value={details.instruction} type="text" name="instruction"  placeholder="Instructinos" /></td>
                </tr>
                </tbody>
            </table>
              
            
            <button type="submit" >Submit</button> 
            {/* <button type="button" onClick={sortBySalary}>Sort by salary</button> */}
            </form>
            
        </div>

        <div className="right-table">
            <h1>Receipy Details</h1>

            <div className="head">
                <h2>Name</h2>
                <h2>Time</h2>
            </div>
            <div className="details-table">
                    <table>

                        

        <tr>

            <td>
            {form_val.map((e) => (
                <div onClick={() => setInstruction(e.instruction)} className="each_div" key={nanoid(6)}>
                
                    <h2>{e.title}</h2>                        
                    <h2>{e.time_to_cook}</h2>
                    
                </div>
            ))}
            </td>

        </tr>

        </table>    
            </div>
            
                
                

              
        </div>

        <div className="food_details">
            <h3>Instruction</h3>
            <h4> {instruction} </h4>
        </div>
    

    </div>
}