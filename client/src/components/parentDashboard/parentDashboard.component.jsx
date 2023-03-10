import '../../components/parentDashboard/parentDashboard.style.scss'
// const smallcontaineritems =[
//     {name:'Sick', number:'2',image:'src'},
//     {name:'Vacation', number:'2',image:'src'},
//     {name:'Day off', number:'2',image:'src'},
//     {name:'Available', number:'2',image:'src'},
// ]
const ParentDash = () => {
    return ( 
        <div className="container-dashboard">
            <h2>Employees <span>30</span><button>view all</button></h2>
            <div className="smallcontainer">
                <p>Sick</p>
                <p>Leave</p>
                <p>Dayoff</p>
                <p>Available</p>

            </div>            
        </div>
     );
}
 
export default ParentDash;