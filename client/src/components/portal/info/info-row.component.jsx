import React, {useState} from "react";
import './info-row.style.scss';
import data from "./mock-data.json";
import ProfilePicture from '../info/profile/profilePic.component';
import myProfilePic from '../../../assets/bg1.jpg';

const  Info = () => {
    const [emp, setEmps] = useState(data);
    return <div className="info-container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Project</th>
                    <th>Unit</th>
                    <th>Time Zone</th>
                    <th>Status</th>
                    <th>Assignment Status</th>
                </tr>
            </thead>
            <tbody>
                {emp.map((emp) => (
                <tr>
                    <td classname="first">
                        <ProfilePicture
                            imageSource={myProfilePic}
                            altText="photo"
                            />
                        {emp.name}</td>
                    <td>{emp.project}</td>
                    <td>{emp.unit}</td>
                    <td>{emp.time}</td>
                    <td>{emp.status}</td>
                    <td>{emp.assignment}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    ;
}
 
export default Info;