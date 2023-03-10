import './inforow.component.css';
const mockdatas=[
    {Name:'joseph', Designation: 'FE Developer', Project:'Viking Studios', Unit:'Development', TimeZone:'UTC+2', Status:'busy', Assignment_status:'Client side'},
    //{name:'joseph', designation: 'FE Developer', Project:'Viking Studios', Unit:'Development', TimeZone:'UTC+2', status:'busy', Assignment_status:'Client side'},
    //{name:'joseph', designation: 'FE Developer', Project:'Viking Studios', Unit:'Development', TimeZone:'UTC+2', status:'busy', Assignment_status:'Client side'},
];
const Inforow = () => {
    return ( <div classname='Row'>
        <table className="Info-row-component">
            <thead>
                <tr>
                    <td><h3>Name</h3></td>
                    <td><h3>Designation</h3></td>
                    <td><h3>Project</h3></td>
                    <td><h3>Unit</h3></td>
                    <td><h3>TimeZone</h3></td>
                    <td><h3>Status</h3></td>
                    <td><h3>Assignment Status</h3></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sagana</td>
                    <td>Kaka Tinadu</td>
                    <td>Bathroom Washing</td>
                    <td>Toilet</td>
                    <td>All the time</td>
                    <td>Busy</td>
                    <td>First Floor Washroom</td>
                </tr>
            </tbody>
        </table>
        </div>
     )
}
 
export default Inforow;