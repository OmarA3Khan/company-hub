import Avatar from '../base/avatar/avatar.component';

import './informationRow.styles.scss';

const InformationRow = (props) => {
  const { children, employeeInfo, projectInfo } = props;
  if(employeeInfo) {
    return (
      <div className="information-row">
        <span className="information-row__pipe" />
        <Avatar name={employeeInfo.firstName + ' ' + employeeInfo.lastName} imgSrc={employeeInfo.imgSrc}/>
        <div className="information-row__col">
          <span>
            <strong>{employeeInfo.firstName} {employeeInfo.lastName}</strong>
          </span>
          <span>{employeeInfo.designation}</span>
        </div>
        <span>{employeeInfo.project}</span>
        <span>{employeeInfo.unit}</span>
        <span>{employeeInfo.timeZone}</span>
        <div className='row'>
          <span className='status-indicator'></span>
          <span>{employeeInfo.status}</span>
        </div>
        <span>{employeeInfo.assignmentStatus}</span>
      </div>
    )
  } else if(projectInfo) {
    return (
      <h3>Project Info</h3>
    )
  } else if(children) {
    return (
      <div className="information-row">
        <span className="information-row__pipe" />
        {children}
      </div>
    );
  }
};

export default InformationRow;
