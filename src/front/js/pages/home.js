import React, { useContext, useState, useEffect } from "react";

import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";



export const Home = () => {


	return (
		<div className=" container aling-items-center">
			<h3 className="mt-4">
				Welcome to JWT proyect, You have to <Link to="/signup"> SignUp</Link> an then  <Link to="/login"> Login</Link>
			</h3>
		</div>
	)




};
