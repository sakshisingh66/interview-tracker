import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewListItemForm from "../../components/personalProblemSet/newListItemForm";
import { addQuestion } from "../../api/index";

function AddQuestion() {
    const [formdata, setformdata] = useState({
        title: '',
        topic: '',
        link: ''
    });
   
    const handleChange = async (e) => {
        // console.log(e.target.name + " " + e.target.value);
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formdata);
        try{
            await addQuestion(formdata);
            setformdata({
                title: '',
                topic: '',
                link: ''
            });

        }catch(err) {
            console.log(err);
            alert(err.response?.data?.message);

        }
        
    }

    return (<NewListItemForm handleChange={handleChange} handleSubmit={handleSubmit}/>)
}

export default withRouter(AddQuestion);