import React, {useState} from "react";
import "./Body.scss";
import axios from 'axios';

function Details() {

    const [title, setTitle] = useState()
	const [type, setType] = useState()
	const [date, setDate] = useState()
	const [description, setDescription] = useState()


	axios.get(`/api/fetch/blogs/test`).then(res => {
		console.log(res.data)
		setType(res.data.data[0].blogDetails.type)
		setTitle(res.data.data[0].blogDetails.title)
		setDate(res.data.data[0].createdDate)
		setDescription(res.data.data[0].blogDetails.description)
	});
    
  return (
    <div className="main">
        <div className="main__details">
            <div className="type">{type}</div>
            <div className="title">{title}</div>
            <div className="date">{date}</div>
            <div className="description">{description}</div>
        </div>
    </div>
  );
}

export default Details;
