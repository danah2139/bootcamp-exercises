const Avatar = (props) => {
	return (
		<div className="avatar-card">
			<img src={props.avatar.image} alt={props.avatar.name} />
			<h3 className="avatar-title">{props.avatar.name}</h3>
		</div>
	);
};
export default Avatar;
