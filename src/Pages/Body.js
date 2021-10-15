import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./Body.scss";
import axios from 'axios';

function Body() {

	let history = useHistory();

	const [title, setTitle] = useState()
	const [type, setType] = useState()
	const [date, setDate] = useState()
	const [additionalInfo, setAdditionalInfo] = useState()

	axios.get(`/api/fetch/blogs/test`).then(res => {
		console.log(res.data)
		setType(res.data.data[0].blogDetails.type)
		setTitle(res.data.data[0].blogDetails.title)
		setDate(res.data.data[0].createdDate)
		setAdditionalInfo(res.data.data[0].blogInfo.additionalInfo)
	});
    
  return (
		<body className="body">
			<div className="body__content">
				<div className="body__cards">
					<div className="body__cards--details" onClick={() => {
						history.push("/Details");
						}}
						>
						<div className="image"></div>
						<div className="bottom">
							<div className="type">{type}</div>
							<div className="title">{title}</div>
							<div className="date">{date}</div>
							<span>Description</span>
							<hr></hr>
							<div className="additionalInfo">{additionalInfo}</div>
						</div>
					</div>
					<div className="body__cards--details"onClick={() => {
						history.push("/Details");
						}}
						>
						<div className="image"></div>
						<div className="bottom">
							<div className="type">{type}</div>
							<div className="title">{title}</div>
							<div className="date">{date}</div>
							<span>Description</span>
							<hr></hr>
							<div className="additionalInfo">{additionalInfo}</div>
						</div>
					</div>
					<div className="body__cards--details"onClick={() => {
						history.push("/Details");
						}}
						>
						<div className="image"></div>
						<div className="bottom">
							<div className="type">{type}</div>
							<div className="title">{title}</div>
							<div className="date">{date}</div>
							<span>Description</span>
							<hr></hr>
							<div className="additionalInfo">{additionalInfo}</div>
						</div>
					</div>
				</div>
				<div className="body__search">
					<div className="body__search--content">
						<div className="search__title">ARTICLES LES PLUS POPULAIRES</div>
						<div className="search--details"onClick={() => {
						history.push("/Details");
						}}
						>
							<div className="title">{title}</div>
							<div className="subtitle">
								<div>{type}</div>
								<div className="subtitle--more">{type}</div>
							</div>
						</div>
						<div className="search--details"onClick={() => {
						history.push("/Details");
						}}
						>
						<div className="title">Descrition</div>
							<div className="subtitle">
								<div>{type}</div>
								<div className="subtitle--more">{type}</div>
							</div>
						</div>
						<div className="search--details"onClick={() => {
						history.push("/Details");
						}}
						>
						<div className="title">{title}</div>
							<div className="subtitle">
								<div>{type}</div>
								<div className="subtitle--more">{additionalInfo}</div>
							</div>
						</div>
						<div className="search--details"onClick={() => {
						history.push("/Details");
						}}
						>
							<span className="date">TAGS</span>
							<hr></hr>
							<div className="tags">
								<div>{type}</div>
								<div className="tags__round">1</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default Body;