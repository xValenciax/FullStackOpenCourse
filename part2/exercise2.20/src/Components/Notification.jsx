/* eslint-disable react/prop-types */
const Notification = ({ status, mssg }) => {
	return <div className={status ? 'notification' : 'error'}>{mssg}</div>;
};

export default Notification;
