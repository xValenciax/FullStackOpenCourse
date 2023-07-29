/* eslint-disable react/prop-types */

const Notification = ({ message, status }) => {
	return <div className={status ? 'notification' : 'error'}>{message}</div>;
};

export default Notification;
